import React from 'react';
import {StyleSheet, Text, View, Pressable, Modal, Alert, Image, ScrollView} from "react-native";


const TOCModal = ({
                      navigation,
                      TOCmodalVisible,
                      setTOCModalVisible,
                  }) => {
    const modalClosePressed = () => {
        setTOCModalVisible(!TOCmodalVisible)
        // navigation.navigate(to)
    }
    const cancelPressed = () => {
        setTOCModalVisible(!TOCmodalVisible)
    }

    return (

        <Modal
            animationType="slide"
            transparent={true}
            visible={TOCmodalVisible}
            onRequestClose={() => {
                // Alert.alert("Modal has been closed.");
                setTOCModalVisible(!TOCmodalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <ScrollView style={styles.modalView}>
                    <Text style={{fontSize:20, fontWeight:"bold"}}>Terms of Services</Text>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur, atque deserunt
                        dolor dolorem dolorum excepturi explicabo hic molestias natus, praesentium provident quod
                        suscipit tempore ut veniam veritatis. A blanditiis debitis esse facere in iure modi porro
                        similique tenetur voluptates. Ab assumenda cupiditate, dicta eos ipsam molestias provident
                        repudiandae sapiente veniam voluptatibus. Aliquam amet aspernatur commodi consequatur dicta
                        distinctio eius ex explicabo facere ipsam laborum magnam magni maiores maxime minus, modi, nulla
                        obcaecati odit officia pariatur quam quidem quos rerum tempora totam ullam vel voluptatibus!
                        Commodi deserunt dolorum eaque et ipsa provident quibusdam sapiente soluta veritatis. Atque,
                        commodi cum dolor eius excepturi explicabo fuga iure nesciunt non provident repellat repudiandae
                        sint, sit soluta tenetur. Ab beatae cupiditate ea eos excepturi magnam magni molestias ullam,
                        vel velit. Alias amet assumenda atque beatae blanditiis consectetur corporis debitis dolorem, et
                        eveniet excepturi facilis illo impedit inventore labore minus, modi natus nesciunt officia
                        officiis perferendis quae quam qui quia reiciendis sapiente sequi soluta, sunt temporibus
                        tenetur totam ullam veniam voluptatum? A aliquam blanditiis et fuga fugiat illum molestiae, nisi
                        quia quibusdam voluptas? Amet asperiores aspernatur debitis eos ex facere, impedit in iusto modi
                        necessitatibus nesciunt nostrum odit optio perspiciatis placeat quam quis repellendus sed,
                        veritatis voluptatum. Adipisci dicta expedita officiis omnis quos! Animi asperiores blanditiis
                        cum illum pariatur sint tempora tempore unde veritatis voluptatem. At eaque enim molestiae
                        voluptate voluptates? Ad adipisci alias architecto ea earum facere hic impedit magnam molestias,
                        nostrum omnis quasi quibusdam quis ratione, reprehenderit sint sit, veniam vero voluptate
                        voluptatem. Architecto cum deleniti, facere non omnis quae sint soluta suscipit ut velit. Amet
                        animi asperiores assumenda autem commodi corporis cupiditate debitis dignissimos distinctio
                        dolorum ducimus, eaque enim harum illo magni minus molestias nisi non odio pariatur porro quia
                        quos ratione reiciendis, reprehenderit saepe sed, temporibus tenetur velit veniam vero
                        voluptatem voluptates voluptatibus. Ab aliquid animi aperiam architecto blanditiis, consequuntur
                        cupiditate delectus dolor eaque eligendi enim facere harum illo in, ipsum itaque iure laborum
                        maiores molestiae nobis quam quasi ratione saepe sequi sit temporibus ullam voluptatibus.
                        Accusamus nobis pariatur quaerat quidem repellat. Commodi corporis culpa delectus doloribus
                        eaque earum eligendi eos et, fuga impedit iste iure necessitatibus nulla, officiis placeat, quam
                        quasi ratione rem rerum sapiente sequi veritatis voluptate? Harum, iusto, soluta? Aliquam
                        deserunt dolorem ipsum laboriosam, maxime numquam pariatur quidem reprehenderit sequi vel. Autem
                        consequatur ex hic nobis nostrum numquam quidem quod sit temporibus ullam? Ad at commodi
                        consectetur consequuntur delectus deserunt dignissimos dolor dolore earum enim eos esse eum fuga
                        harum hic ipsam iure laboriosam minus natus nobis nulla, obcaecati odit officiis perferendis
                        perspiciatis porro provident quisquam recusandae rerum sapiente sint sit suscipit tempora vero
                        vitae voluptate voluptatibus! Asperiores aspernatur assumenda consectetur ducimus eaque iusto
                        laborum minus rerum suscipit totam. Cumque dolor esse harum id officia ratione sapiente sint
                        voluptatum! Cumque dolorem doloribus harum itaque minima nesciunt nihil numquam reprehenderit
                        vitae voluptatem? A adipisci asperiores aut consectetur cum cupiditate, debitis dolor dolorum ea
                        enim ex expedita id illum in ipsam iusto libero nesciunt nostrum nulla numquam pariatur possimus
                        provident quae, similique vitae voluptas, voluptates? A aliquid commodi doloribus, ducimus
                        eveniet exercitationem illum molestiae nemo, quia quibusdam quidem quisquam, quod sapiente
                        soluta suscipit tempore vel vitae voluptas? Accusamus asperiores autem consequatur cum deleniti
                        dolore dolorum ducimus enim eos error exercitationem expedita id, in iure laborum magni maiores
                        molestias nemo nulla porro provident, quo repellendus sequi tempora totam, vel veniam. Ad atque
                        consequatur corporis cumque dolorem eaque fuga illo incidunt iste nobis optio, quos ratione
                        sequi, velit veritatis. Aperiam atque consequatur delectus enim eos fugiat, ipsam itaque iusto
                        laudantium minima molestiae odio, perspiciatis provident quis quos ratione repellat repudiandae
                        rerum sapiente voluptatum. Accusantium, amet culpa cumque esse fuga harum impedit inventore ipsa
                        laborum minus mollitia neque, nobis nostrum obcaecati perferendis quas repudiandae saepe sequi
                        sit voluptatum. Aliquam aut, culpa cum facilis iure laboriosam laudantium libero magni nam
                        nesciunt officiis provident quidem quis quisquam quo quod sequi soluta suscipit veritatis vitae?
                        Aperiam architecto aspernatur dicta doloribus eaque enim expedita incidunt iusto laboriosam nemo
                        odio quis quo sequi, ut vitae? Ab accusamus aliquam consequuntur dolorem hic in iste laborum
                        modi nesciunt provident quae quam quis sapiente unde, veritatis. Aliquam architecto aspernatur
                        assumenda beatae cupiditate dolor doloribus esse est expedita iste libero neque, nesciunt nihil
                        nobis optio quaerat quisquam sit voluptatem! Animi blanditiis illum ipsam minus, porro quod
                        reiciendis soluta. A beatae doloremque dolores, eaque enim maiores mollitia nesciunt omnis!
                        Dolore error esse molestias pariatur, provident repellat similique voluptate voluptatum!
                        Accusantium amet asperiores autem consectetur consequatur dicta distinctio dolorum et, impedit,
                        inventore iste mollitia officia perferendis praesentium quas quis repellat repudiandae sed
                        tempore ullam velit voluptate voluptatem voluptates. Aut debitis distinctio doloremque eaque
                        earum laboriosam nobis reiciendis voluptate. Et facilis maxime molestias possimus? Alias
                        architecto beatae dolorem, eligendi eos ex fugit hic id iure libero minus obcaecati pariatur
                        praesentium provident quaerat, quam quos repellat sunt vel voluptatem? Alias culpa debitis,
                        doloribus eaque excepturi exercitationem illo illum iusto maiores nam nihil, non porro repellat
                        sapiente, similique sit vel vitae? Maiores necessitatibus odit provident, quod recusandae
                        sapiente suscipit tempore voluptatem! Aliquid commodi consequuntur, corporis delectus fugiat,
                        ipsa ipsum magnam natus odio quis quo quod repellat, rerum sint voluptatem? Animi aspernatur
                        atque deleniti error facilis in laudantium magni, minus quia quidem reiciendis tenetur.
                        Accusamus animi autem blanditiis corporis delectus deserunt earum eius enim eos error et
                        explicabo illum impedit iste magnam molestiae natus, necessitatibus nostrum nulla odio
                        perferendis quibusdam repellat rerum ullam vero vitae voluptatem! Aliquid distinctio inventore
                        ipsa laboriosam necessitatibus nulla obcaecati quidem? Asperiores debitis excepturi facere iure
                        laudantium pariatur quod rem repellendus sapiente ut. Aperiam architecto assumenda consectetur
                        corporis deleniti doloribus enim error eum eveniet hic illo incidunt, maiores minima obcaecati
                        quaerat quod recusandae repudiandae rerum similique sunt unde ut veniam! Accusantium deleniti
                        est magni nemo perferendis temporibus voluptate voluptates! Accusantium consectetur,
                        consequuntur distinctio doloribus earum eius esse est explicabo fugiat inventore iste iure
                        iusto, maiores molestiae odio officia, officiis praesentium quam ratione sit! Atque deleniti
                        eius excepturi incidunt ipsam odio sit tempore vitae voluptatem! Ad, soluta, tempora. Dicta nemo
                        obcaecati officiis, ut vel voluptatem!
                    </Text>
                    <Pressable
                        style={styles.button}
                        onPress={modalClosePressed}
                    >
                        <Text style={styles.buttonText}>Ok</Text>
                    </Pressable>
                    <View style={{height:50}}/>
                </ScrollView>
            </View>
        </Modal>
    );
};

export default TOCModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'space-between',
        backgroundColor: "#ffffff"
    },
    forgotPasswordImage: {
        maxWidth: 150,
        height: 150
    },
    Title: {
        fontSize: 17
    },
    button: {
        backgroundColor: "#77ACA2",
        paddingVertical: 15,
        width: "100%",
        marginBottom: 10,
        borderRadius: 9,
        marginTop: 30
    },
    buttonText: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center"
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: '#28282880'
    },
    modalView: {
        width: "90%",
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 35,
        // alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    cancelButton: {
        backgroundColor: "#ADADAD",
        paddingVertical: 15,
        width: "100%",
        borderRadius: 9,
        // marginTop:-5

    },
    modalContainer: {
        backgroundColor: '#282828'
    },
    unlinkButtonContainer: {
        backgroundColor: "#FF7676",
        paddingVertical: 15,
        width: "100%",
        marginBottom: 20,
        borderRadius: 9,
        marginTop: -5
    }
});