import React , {useState} from "react";
import { View,StyleSheet,TextInput,Text,SafeAreaView,TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Svg,Path } from "react-native-svg";
import DatePicker from "react-native-date-picker";

const PostData = ({route}) => {
    const image = route.params.image;
    const navigation = useNavigation();
    const [caption,setCaption] = useState("");
    const [description,setDescription] = useState("");
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false)
    const [descriptionHeight, setDescriptionHeight] = useState(200); // Initial height


    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
      };

    const goBack = () => {
        navigation.goBack();
    }

    const goNext = () => {
        const formattedDate = formatDate(date); 
        {/* Nothing should be empty before sending */}
        console.log(image, caption, description, formattedDate);
        if(image == undefined || caption == "" || description == "" || formattedDate == ""){
            alert("Please fill all the fields");
            return;
        }

        navigation.navigate("PostPreview", {
            image: image,
            caption: caption,
            description: description,
            date: formattedDate 
        });
    };
    

    const style = StyleSheet.create({
        backButton:{
            padding: 10,
        },
        header:{
            fontFamily: 'ChelseaMarket-Regular',
            fontSize: 25,
            color: 'black',
            alignSelf: 'center',
            textAlign: 'center',
            padding: 20,
        },

        horizontalDivider:{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
            width: '40%',
            alignSelf: 'center',
            padding: 5,
        },

        button:{
            width: '50%',
            backgroundColor: '#e7cece',
            padding: 20,
            alignItems: 'center',
            alignSelf: 'center',
            borderWidth:2,
            shadowColor: '#000', 
            shadowOffset: {
                width: 3, 
                height: 3, 
            },
            shadowOpacity: 1, 
            shadowRadius: 2, 
                     
        },
        buttonText:{
            fontFamily: 'ChelseaMarket-Regular',
            fontSize: 17,
        },

        textStyle:{
            fontFamily: 'ChelseaMarket-Regular',
            fontSize: 20,
            alignSelf: 'center',   
            padding: 10,
        },
        caption:{
            fontFamily: 'ChelseaMarket-Regular',
            fontSize: 17,
            alignSelf: 'center',
            padding: 10,
            borderWidth:1,
            borderColor: 'grey',
            width: '70%',
            height: 100,
            textAlign: 'center',
            
        },

        description:{
            fontFamily: 'ChelseaMarket-Regular',
            fontSize: 17,
            alignSelf: 'center',
            padding: 10,
            borderWidth:1,
            borderColor: 'grey',
            width: '70%',
           
            textAlign: 'center',
            paddingBottom:0,
            paddingTop:0,
            
            
        }
    });

    return(
        <SafeAreaView style={{flex:1}}>
            <ScrollView> 
                <View style={style.backButton}>
                    <TouchableOpacity onPress={goBack}>
                        <Svg height="25" width="25" viewBox="0 0 24 24">
                            <Path d="M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z" fill="#000" />
                        </Svg>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={style.header}>Preserve Your Memories</Text>
                </View>

                <View style={style.horizontalDivider}/>

                <View style={{padding:30}}>
                    <Text style={style.textStyle}>Date</Text>
                    <TouchableOpacity onPress={()=> {setOpen(true)}} style={style.button}>
                            <Text style={style.buttonText}>Pick Date</Text>
                    </TouchableOpacity>
                    <DatePicker
                        modal
                        mode="date"
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                        }}
                        onCancel={() => {
                        setOpen(false)
                        }}
                    />
                    
                </View>
                

                <View style={style.horizontalDivider}/>


                <View style={{padding:30}}>
                    <Text style={style.textStyle}>Small Caption</Text>
                    
                        <TextInput
                            style={style.caption}
                            onChangeText={(text)=>{setCaption(text)}}
                            maxLength={20}
                            
                            placeholder="Caption!"
                            placeholderTextColor="grey"
                        />
                    
                    
                </View>
                <View style={style.horizontalDivider}/>


                <View style={{padding:30}}>
                    
                    <Text style={style.textStyle}>Description</Text>
                    <TextInput
                        style={[style.description, { height: Math.max(200, descriptionHeight) }]}
                        onChangeText={(text) => setDescription(text)}
                        onContentSizeChange={(event) => {
                            setDescriptionHeight(event.nativeEvent.contentSize.height + 20); // Add a bit of padding
                        }}
                        maxLength={200}
                        multiline
                        textAlignVertical='top' // Align text to top to manage growth
                        placeholder="description!"
                        placeholderTextColor="grey"
                    />

                
                </View>
                <View style={style.horizontalDivider}/>

                
                <View style={{padding:30}}>
                    
                    <TouchableOpacity onPress={goNext} style={style.button}>
                            <Text style={style.buttonText}>continue</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            
        </SafeAreaView>
    );
};

export default PostData;