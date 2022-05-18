import React from 'react';
import {
    View,
    Text, 
    Image, 
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Pressable,
    Linking,
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = 'white';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/91546467?v=4';
const urlToMyGithub = 'https://github.com/DevLeopoldo';

const App = () => {

    const handlePressGoToGihub = async () => {
        
        const res = await Linking.canOpenURL(urlToMyGithub);
        
        if(res){
            
            await Linking.openURL(urlToMyGithub);
        }
    }
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle={'light-content'}></StatusBar>
            <View style={style.content}>
               <Image accessibilityLabel='Leopoldo ao ar livre' 
               style={style.avatar} source={{uri: imageProfileGithub}}/>

               <Text accessibilityLabel="Nome: Leopoldo dos Passos"
               style={[style.defaultText, style.name]}>Leopoldo dos Passos
               </Text>
               <Text accessibilityLabel="Nickname: DevLeopoldo"
               style={[style.defaultText, style.nickname]}>DevLeopoldo
               </Text>
               <Text accessibilityLabel="Descrição: | 'Pegue as pedras que a vida Coloca no seu caminho e construa sua estrutura de Vida' "
               style={[style.defaultText, style.description]}>"Pegue as pedras que a vida Coloca no seu caminho e construa sua estrutura de Vida".
               </Text>


               <Pressable onPress={handlePressGoToGihub}>
                <View style={style.button}>
                   <Text style={[style.defaultText, style.textButton]}>Open in Github</Text>
               </View>
               </Pressable>
            </View> 
        </SafeAreaView> 
    );
};
export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 200,
        width:  200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,

    },
    defaultText: {
        color: 'white',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 24,  
    },
    nickname:{
        fontSize: 18,
        color: '#4F565E',
    },
    description: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
    },
    textButton:{
        fontWeight: 'bold',
        fontSize: 16,
    },

});