import * as React from 'react';
import { View, ScrollView, StyleSheet, Text, FlatList } from "react-native-web";
import { Card, Title, Paragraph, Portal, Searchbar, Modal, Provider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Header from '../components/header';
import { DATA } from "./data";
import CircleBorder from '../CircleBorder';




export default function Centres({ navigation }) {
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
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

                <View style={{ marginTop: "25%", marginRight: "3%", marginLeft: "4%", width: "96%" }}>
                    <View style={{ flexDirection: 'row', height: 42, width: "100%", marginTop: 10, marginRight: 20, marginBottom: 10, }}>
                        <Searchbar
                            placeholder="Search"
                            onChangeText={onChangeSearch}
                            value={searchQuery}
                            style={{ width: '80%', height: "100%", marginBottom: 10, marginRight: 15 }}
                        />


                        <Ionicons
                            name="filter"
                            size={30}
                            styles={{ width: '20%', marginLeft: 10 }}
                            color="#ff6600"
                            onPress={showModal}

                        />

                    </View>

                    <FlatList
                        data={DATA}
                        renderItem={({ item }) =>
                            <View style={{ marginTop: 10, marginRight: 20, }} >
                                <Card onPress={() => { navigation.navigate("CentreDetails") }}>
                                    <Card.Cover style={{ height: 80, borderTopLeftRadius: 15, borderTopRightRadius: 15 }} source={{ uri: item.Image }} />
                                    <View style={{ width: 24, height: 22, backgroundColor: "#ff6600", top: 14, position: 'absolute', marginLeft: "3%", borderRadius: 4, justifyContent: 'center', alignItems: 'center', }}>
                                        <Text style={{ color: "#ffffff", }}>9.9</Text>
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
                        <View style={{ marginLeft: 10 }}>
                            <View style={{ flexDirection: 'row', height: 40, marginTop: 10 }}>
                                <View   ><Ionicons
                                    name="md-close-outline"
                                    size={24}
                                    color="black"
                                    onPress={hideModal}

                                /></View>
                                <View style={{ marginLeft: "35%" }}> <Text >Select Centre</Text></View>

                            </View>


                            <Searchbar
                                placeholder="Search Centre name"
                                onChangeText={onChangeSearch}
                                value={searchQuery}
                                style={{ width: '10`0%', marginBottom: 10, marginRight: 15 }}
                            />

                            <View styles={{ height: 70, marginTop: 0 }}><MaterialCommunityIcons
                                name="storefront-outline"
                                size={25}
                                color="#ff6600"
                            />
                                <Text >     Select Centre   </Text></View>
                            <View styles={{ height: 70, marginTop: 0 }}><MaterialCommunityIcons
                                name="storefront-outline"
                                size={25}
                                color="#ff6600"
                            />
                                <Text >     Select Centre   </Text></View>
                            <View styles={{ height: 70, marginTop: 0 }}><MaterialCommunityIcons
                                name="storefront-outline"
                                size={25}
                                color="#ff6600"
                            />
                                <Text >     Select Centre   </Text></View>
                            <View styles={{ height: 70, marginTop: 0 }}><MaterialCommunityIcons
                                name="storefront-outline"
                                size={25}
                                color="#ff6600"
                            />
                                <Text >     Select Centre   </Text></View>
                            <View styles={{ height: 70, marginTop: 0 }}><MaterialCommunityIcons
                                name="storefront-outline"
                                size={25}
                                color="#ff6600"
                            />
                                <Text >     Select Centre   </Text></View>
                            <View styles={{ height: 70, marginTop: 0 }}><MaterialCommunityIcons
                                name="storefront-outline"
                                size={25}
                                color="#ff6600"
                            />
                                <Text >     Select Centre   </Text></View>
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
        width: '25%',
        paddingVertical: 20,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        marginLeft: 15,
        borderRadius: 6,
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
