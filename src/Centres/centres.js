import * as React from 'react';
import { View, ScrollView, StyleSheet, Text, FlatList, Image } from "react-native";
import { Card, Title, Paragraph, Portal, Searchbar, Modal, Provider, Avatar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Header from '../components/header';
import { DATA } from "./data";
import CircleBorder from '../CircleBorder';
import { RadioButton } from 'react-native-paper';




export default function Centres({ navigation }) {
    const [visible, setVisible] = React.useState(false);
    const [value, setValue] = React.useState('first');
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const [checked, setChecked] = React.useState('1');
    const containerStyle = {
        backgroundColor: 'white', flex: 1,
        marginTop: 100, justifyContent: 'flex-start',
    };
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    return (
        <ScrollView>
            <View>
                <View>
                    <Header
                        iconName="home-outline"
                        title="All Centres"
                        iconLeft="add-box"
                        marginLeft={5}
                        marginRight={170}
                        onPress={() => showModal(true)
                        } />
                    <View style={styles.sliderContainer}>
                        <ScrollView horizontal={true} hire >



                            <View style={styles.sliderCard}>
                                <View style={{ flexDirection: 'row' }}>
                                    <CircleBorder
                                        size={40}
                                        borderWidth={2}
                                        backgroundColor="#FFF0FB"
                                        marginTop={-8}
                                    >
                                        <MaterialCommunityIcons
                                            name="storefront-outline"
                                            size={16}
                                            color="#DB147F"
                                        />
                                    </CircleBorder>
                                    <Text style={styles.sliderTitle}>Total Centres</Text>
                                </View>
                                <Text style={styles.sliderText}>122</Text>
                            </View>

                            <View style={styles.sliderCard}>
                                <View style={{ flexDirection: 'row' }}>
                                    <CircleBorder
                                        size={40}
                                        borderWidth={2}
                                        backgroundColor="#FFF4EC"
                                        marginTop={-8}
                                    >
                                        <Ionicons name="location-outline" size={16} color="#FB8429" />
                                    </CircleBorder>
                                    <Text style={styles.sliderTitle}>Total Places</Text>
                                </View>
                                <Text style={styles.sliderText}>3200</Text>
                            </View>

                            <View style={styles.sliderCard}>
                                <View style={{ flexDirection: 'row' }}>
                                    <CircleBorder
                                        size={40}
                                        borderWidth={2}
                                        backgroundColor="#E9F4FF"
                                        marginTop={-8}
                                    >
                                        <Feather name="dollar-sign" size={16} color="#32A4FC" />
                                    </CircleBorder>
                                    <Text style={styles.sliderTitle}>Est. Earning</Text>
                                </View>
                                <Text style={styles.sliderText}>$3,465,000</Text>
                            </View>

                            <View style={styles.sliderCard}>
                                <View style={{ flexDirection: 'row' }}>
                                    <CircleBorder
                                        size={40}
                                        borderWidth={2}
                                        backgroundColor="#FEEFEF"
                                        marginTop={-8}
                                    >
                                        <FontAwesome5
                                            name="clipboard-list"
                                            size={16}
                                            color="#E52828"
                                        />
                                    </CircleBorder>
                                    <Text style={styles.sliderTitle}>Waitlist Value </Text>
                                </View>
                                <Text style={styles.sliderText}>$3,465</Text>
                            </View>


                        </ScrollView>
                    </View>
                </View>

                <View style={{ marginTop: "20%", width: "94%", marginLeft: "3%", marginRight: "3%", marginBottom: 20 }}>

                    <View style={{ flexDirection: 'row', height: 42, width: "100%", marginTop: 10, marginBottom: 10, marginRight: 20 }}>
                        <View style={{ width: '82%', height: 42, }}>
                            <Searchbar
                                placeholder="Search Centre name"
                                onChangeText={onChangeSearch}
                                value={searchQuery}
                                style={{ borderRadius: 6, height: 42 }}
                            />
                        </View>
                        <View style={{ marginLeft: "2%", width: "16%", height: 42, backgroundColor: "#FFFFFF", alignItems: 'center', justifyContent: 'center', borderRadius: 4, right: 0 }}>
                            <Ionicons
                                name="filter"
                                size={30}
                                color="#ff6600"
                                onPress={showModal}

                            />
                        </View>

                    </View>

                    <FlatList
                        data={DATA}
                        renderItem={({ item }) =>
                            <View style={{ marginBottom: 20 }} >
                                <Card onPress={() => { navigation.navigate("CentreDetails") }}>
                                    <Card.Cover style={{ height: 80, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={{ uri: item.Image }} />
                                    <View style={{ width: 24, height: 22, backgroundColor: "#ff6600", top: 14, position: 'absolute', marginLeft: "3%", borderRadius: 6, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: "#ffffff", }}>9.9</Text>
                                    </View>
                                    <View style={{ width: 54, height: 26, top: 40, right: 8, position: 'absolute', marginLeft: "3%", borderRadius: 6, justifyContent: 'center', alignItems: 'center', }}>
                                        <Image style={{ width: 54, height: 26, borderRadius: 6 }} source={{
                                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_xR_H-gJTx6CoL8eZY-Cb4xf79ODN4tF7iA&usqp=CAU'
                                        }} />
                                    </View>
                                    <Card.Content>
                                        <View style={{ marginTop: 15 }}>
                                            <b>{item.title}</b>
                                        </View>
                                        <View style={{ marginTop: 15 }}>
                                            <Text styles={{ size: 40 }}>
                                                <Ionicons name="location-outline" size={14} color="#857E7F" />  {item.address}
                                            </Text>
                                        </View>
                                        <View style={{ flexDirection: "row", marginTop: 15 }}>
                                            <View style={{ width: "50%" }}>
                                                <Text ><Ionicons
                                                    name="happy"
                                                    size={14}
                                                    color="#857E7F" paddingHorizontal={30}
                                                />  {item.children}</Text>
                                            </View>
                                            <View style={{ width: "50%", }}>
                                                <Text ><FontAwesome5
                                                    name="clipboard-list"
                                                    size={14}
                                                    color="#857E7F"
                                                    marginRight={30}
                                                />  {item.base}</Text>
                                            </View>

                                        </View>

                                        <View style={{ flexDirection: "row", marginTop: 15 }}>
                                            <View style={{ width: "50%", }}>
                                                <Text style={{ color: 'blue' }}> <FontAwesome5
                                                    name="temperature-low"
                                                    size={14}
                                                    color="#857E7F"
                                                />  {item.waitlist}</Text>
                                            </View>

                                            <View style={{ width: "50%" }}>
                                                <Text><FontAwesome5
                                                    name="hand-holding-water"
                                                    size={14}
                                                    color="#857E7F"
                                                />  {item.service}</Text>
                                            </View>

                                        </View>



                                    </Card.Content>
                                </Card>
                            </View>
                        }

                    />


                </View>
            </View>

            <Provider>
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} transparent={true} contentContainerStyle={containerStyle}>
                        <View style={{ marginLeft: "4%", width: "93%", marginRight: "3%" }}>
                            <View style={{ flexDirection: 'row', height: 40, marginTop: 10 }}>
                                <View   ><Ionicons
                                    name="md-close-outline"
                                    size={24}
                                    color="black"
                                    onPress={hideModal}

                                /></View>
                                <View style={{ marginLeft: "35%" }}> <Text >Select Centre</Text></View>

                            </View>
                            <Divider width={5} />

                            <Searchbar
                                placeholder="Search Centre name"
                                onChangeText={onChangeSearch}
                                value={searchQuery}
                                style={{ width: '100%', marginBottom: 20, marginTop: 20 }}
                            />
                            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>

                                <FlatList
                                    data={DATA}
                                    renderItem={({ item }) =>
                                        <View style={{ flexDirection: "row", marginLeft: "4%", width: "96%", marginBottom: 20, alignItems: 'center', fontSize: 24 }}>
                                            <View   style={{width: "16%", marginRight:3}} >
                                                <Avatar.Image size={50} source={{ uri: item.Image }} />
                                            </View>
                                            <View style={{
                                              paddingLeft:5,
                                                width: "73%"
                                            }}><Text>{item.title}</Text></View>
                                            <RadioButton
                                                value={item.id}
                                                color="#ff6600"
                                                size={30}
                                                marginTop={20}
                                                uncheckedColor="#ff6600"
                                                onValueChange={() => { navigation.navigate("CentreDetails") }}
                                            />


                                        </View>

                                    } />

                            </RadioButton.Group>



                        </View>
                    </Modal>

                </Portal>
            </Provider>
        </ScrollView>


    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    sliderContainer: {
        position: 'absolute',
        top: 100,
        width: "100%"
    },
    sliderCard: {
        width: 178,
        height: 98,
        paddingVertical: 20,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        marginLeft: 15,
        borderRadius: 10,
    },
    sliderText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 220,
        paddingHorizontal: 15,
        width: '100%',
    },
    searchContent: {
        flexDirection: 'row',
        width: '80%',
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 6,
    },

});
