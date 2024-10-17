import { StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView, Platform, ImageBackground } from "react-native";
import background_image from '../../../assets/images/background_image.png'

const statusBarHeight = StatusBar.currentHeight;

export default function Home() {
    return (
    <ImageBackground
      style={styles.backgroundImage}
      source={background_image}
    >

        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.content}>
                    <Text style={styles.txtEvent}>Doar pão na rua</Text>
                    <Text>Doar pão para mendigos heheeheheehe</Text>
                </View>

                <View style={styles.content}>
                    <Text>Café Solidário</Text>
                </View>

                <View style={styles.content}>
                    <Text>Conteúdo</Text>
                </View>

                <View style={styles.content}>
                    <Text>Conteúdo</Text>
                </View>

                <View style={styles.content}>
                    <Text>Conteúdo</Text>
                </View>

                <View style={styles.content}>
                    <Text>Conteúdo</Text>
                </View>

                <View style={styles.content}>
                    <Text>Conteúdo</Text>
                </View>

                <View style={styles.content}>
                    <Text>Conteúdo</Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },

    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? statusBarHeight:25,
    },

    content: {
        alignSelf: 'center',
        flex: 1,
        padding: 10,
        width: '90%',
        borderRadius: 10,
        opacity: 0.7,
        height: 85,
        marginBottom: 20,
        backgroundColor: '#f1f1f1',
    },

    txtEvent: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 5
    }    
});