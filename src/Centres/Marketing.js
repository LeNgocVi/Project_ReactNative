import React, { useState } from 'react'
import { View, Text, Switch, StyleSheet, Image, Modal, Dimensions, Pressable} from 'react-native';
export default function Marketing() {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {setIsEnabled(previousState => !previousState); SetshowWarning(true);};

  const [showWarning, SetshowWarning] = useState(false);
  
  
    return (
        <View>
        <Modal
        visible={showWarning}
        transparent
        onRequestClose={() =>
          SetshowWarning(false)
        }
        animationType='slide'
        hardwareAccelerated
      >
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text style={{
                color: '#000000',
                fontSize: 25,
                fontWeight:'700',
                textAlign: 'center',
              }}>Featured Listing</Text>
              <Image style={styles.suffix}  source={require('../../assets/sullfic.png')} />
            </View>
            <Pressable
              onPress={() => SetshowWarning(false)}
              style={styles.warning_button}
              android_ripple={{ color: '#fff' }}
            >
              <Text style={styles.textKE}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo erat tempor scelerisque sit adipiscing velit. Commodo erat tempor scelerisque sit adipiscing velit.</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.box}>
        <Text style={styles.title}>Featured Listing</Text>
        <Image source={require('../../assets/information_icon.svg')} />
        <Text style={styles.price_title}>$50<Text style={styles.time}> / per month </Text></Text>
        <Switch
      style={styles.switch}
      trackColor={{ false: "#767577", true: "#DB147F" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="white"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>

      <View style={styles.box}>
        <Text style={styles.title}>Featured Listing</Text>
        <Image source={require('../../assets/information_icon.svg')} />
        <Text style={styles.price_title}>$50<Text style={styles.time}> / per month </Text></Text>
        <Switch
      style={styles.switch}
      trackColor={{ false: "#767577", true: "#DB147F" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="white"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
      
    </View>
    )
}

const styles = StyleSheet.create({
box: {
  marginHorizontal: 16,
  marginVertical: 20,
  backgroundColor: "white",
  paddingHorizontal: 16,
  paddingVertical: 16,
  borderRadius: 12
},

switch: {
  position: 'absolute',
  marginTop: 35,
  marginLeft: 283,
},

suffix: {
  position: 'absolute',
  marginTop: 25,
  marginLeft: 342,
},

title: {
  fontWeight: 'bold',
  fontSize: 14,
},

price_title: {
  fontWeight: 'bold',
  fontSize: 20,
},

time: {
  fontWeight: 'normal',
  fontSize: 14
},

centered_view: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#00000099',
},

warning_modal: {
  width: Dimensions.get('window').width,
  height: 300,
  backgroundColor: '#eeff0f0',
  borderRadius: 20,
  top: "40%"
},
warning_title: {
  height: 100,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#eff0f0',
  borderTopRightRadius: 20,
  borderTopLeftRadius: 20,
  borderBottomWidth:1,
  borderColor:'grey'
},
warning_body: {
  height: 100,
  justifyContent: 'center',
  alignItems: 'center',
},

textKE: {
  marginTop:20,
  fontSize: 20,
  margin: 5,
  textAlign: 'center',
},

warning_button: {
  backgroundColor: '#fff',
  borderBottomWidth:1,
  borderColor:'grey'
},

})