import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView, ScrollView, TextInput,
} from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import userImage from "../assets/carer.png";
import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';

const PrivacyPolicy = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <HeaderComponent
                navigation={navigation}
                toc
                tocTitle={'Privacy Policy'}
            />
            <ScrollView>
                <Text style={{padding: 20, textAlign:"justify"}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate, deleniti doloribus, ea fuga
                    itaque iusto provident quidem sapiente soluta tempore, ullam voluptatibus voluptatum. Distinctio
                    enim eum exercitationem illo magnam quod tempora, temporibus. Adipisci aperiam at blanditiis dolor
                    dolorem excepturi fugit ratione tenetur veniam voluptate. A aperiam architecto asperiores commodi
                    delectus excepturi, labore laborum, laudantium nisi numquam omnis similique temporibus voluptatem.
                    Adipisci atque beatae, consequatur consequuntur cupiditate error est et eveniet ipsam laudantium
                    magnam magni minus molestias nobis odio placeat quae quis quos rem rerum similique tempore ullam ut
                    vel vitae voluptatibus voluptatum. Aliquid blanditiis debitis facere hic iure natus numquam possimus
                    quae quidem, reprehenderit sed veniam voluptas? Accusamus accusantium ad aliquam asperiores at
                    consequatur cupiditate delectus deleniti dignissimos doloribus eaque eius eligendi error
                    exercitationem facere fugiat illo itaque iusto laudantium magnam magni nam, nobis odio officiis
                    praesentium quasi quia quisquam quo quod recusandae reiciendis repellendus reprehenderit, rerum
                    suscipit unde, ut vero. Assumenda commodi delectus error esse, ex fugiat, labore magni
                    necessitatibus odit quibusdam quidem quod reiciendis tenetur? Alias amet aspernatur cum ea hic
                    natus, officia pariatur, quia quos, sit tenetur voluptas voluptate? Commodi consectetur culpa,
                    dolorum enim eveniet fugit harum, magnam, nam nulla omnis perspiciatis placeat praesentium quod
                    reiciendis repellat? Aperiam corporis eligendi est ex iusto nostrum, quia recusandae rem unde vitae!
                    A, asperiores id ipsum iste libero mollitia necessitatibus nemo nobis odio pariatur perspiciatis
                    quaerat quod rerum saepe tempora vel, velit? Alias aperiam aspernatur at ducimus et eum inventore
                    minus placeat quaerat quidem rem, rerum saepe sequi velit vitae? A autem consequatur, corporis
                    dolorem doloribus ducimus ea eligendi enim et ex excepturi, expedita ipsam libero magnam nemo
                    obcaecati officia perferendis placeat quaerat quia quis ullam veritatis. Aut beatae blanditiis cum
                    doloribus, ea enim facere harum id iure neque non obcaecati perferendis quod, quos similique veniam,
                    veritatis voluptates. Ad asperiores in, laboriosam molestias omnis pariatur repellat saepe
                    temporibus tenetur vitae! Aliquam aperiam architecto blanditiis consectetur dicta dolore eaque error
                    et illo ipsa magnam non, omnis praesentium quis, rem sed ullam unde vitae. Aperiam at commodi
                    cupiditate doloremque earum excepturi maiores quas sequi ullam? Accusantium earum ipsa ipsum nisi
                    omnis pariatur quis? Blanditiis cupiditate facere fuga illum possimus quo saepe vitae. A accusamus
                    amet aut autem commodi culpa, delectus deserunt dolorem doloribus eos est explicabo facilis illo
                    ipsum minus nihil nobis odit officiis pariatur placeat possimus praesentium quia quod ratione sit
                    suscipit velit voluptatibus. Cum, molestiae rerum. Autem distinctio fugiat libero neque nisi nostrum
                    numquam provident quis rem sit! Ab aliquam amet aperiam autem blanditiis, dignissimos dolore
                    doloremque doloribus dolorum eius error et ex hic id iste laborum laudantium obcaecati optio, porro
                    quia repudiandae sequi, totam vel veniam voluptates? Adipisci consectetur culpa deserunt magnam
                    maiores placeat recusandae reprehenderit sapiente sed. Architecto autem consequatur, dolor, dolores
                    doloribus explicabo fugit ipsum iste laudantium maiores officia provident quia quisquam suscipit ut?
                    Alias dicta dolores magni nihil suscipit. Aperiam atque blanditiis dignissimos distinctio earum et
                    fuga fugiat iste, itaque nam nobis, nostrum nulla numquam obcaecati quaerat quam voluptatum? Aliquid
                    animi consectetur consequatur magnam minus officiis porro praesentium quos repellat sapiente,
                    veritatis, vero! Aperiam, commodi dolores eaque est ex illo incidunt similique sunt tempore ullam.
                    Alias atque cupiditate dicta eaque eius error libero minus nam numquam provident quibusdam
                    reprehenderit, sint soluta ut voluptatem. A accusamus ad adipisci alias aliquid animi beatae cum
                    error est eum excepturi expedita illum impedit magni odit quasi quod reiciendis repudiandae
                    similique tempore, ullam unde, veniam veritatis vitae voluptas voluptate voluptatum! Amet asperiores
                    consequuntur cum deleniti dicta, doloremque expedita harum impedit iure labore nobis nulla quam quia
                    saepe ut! Ab, dolore dolores fuga fugit, maxime minus nihil odio optio perferendis praesentium qui
                    reprehenderit sapiente totam! A aliquid, ipsum laboriosam laborum nihil nostrum, officia quaerat
                    quas quia quod sed sint suscipit, ut! Architecto dolorem ducimus libero qui repellendus repudiandae
                    velit vero. Aliquam laudantium molestias quia quos voluptatem. Ab, deserunt ea earum excepturi
                    itaque, labore maiores molestias nesciunt obcaecati praesentium quas quasi rem repudiandae rerum
                    saepe temporibus velit voluptates? Consequuntur cupiditate dolorum esse hic in inventore iure iusto
                    labore maxime porro quis, quo tenetur totam. Ab cum explicabo minus nemo nesciunt, non nostrum
                    praesentium quam qui reiciendis similique sit suscipit unde veritatis vero! Est expedita laboriosam
                    molestiae officiis quia saepe temporibus! A adipisci, aliquid atque corporis deserunt harum maiores
                    rem temporibus vero. Ab accusantium consequatur culpa cum debitis dolorem facilis fuga impedit
                    molestiae nostrum officia quasi quos repellendus suscipit tempore vitae, voluptate. Ab alias
                    blanditiis consequuntur debitis dignissimos dolore doloremque earum ipsam iste labore laborum libero
                    modi nam neque nobis obcaecati officiis perspiciatis possimus praesentium quam quas quia quibusdam
                    quo quod repellendus saepe similique sint voluptate voluptatem, voluptatibus! A asperiores debitis,
                    delectus dolores ducimus ea eius facilis fuga fugit hic id minima modi mollitia nisi nulla numquam
                    obcaecati, perspiciatis porro praesentium quidem quis quo ratione reiciendis soluta sunt suscipit
                    tempora velit? Ab architecto beatae dolores, doloribus, earum ex fuga fugit, hic illo impedit iste
                    iusto labore laboriosam minima minus necessitatibus nihil obcaecati officia omnis optio porro
                    provident quae quam quasi quos sapiente sint sunt tempora temporibus ullam unde velit vero
                    voluptatem! Alias animi, autem corporis cumque cupiditate dicta dolorem dolorum ea error eum eveniet
                    facere fugiat harum illo incidunt inventore maiores mollitia natus nemo non nulla numquam obcaecati
                    pariatur perspiciatis quaerat quam quasi qui sapiente sed sequi tenetur ut voluptate voluptatem?
                    Aperiam beatae commodi consequatur culpa, cumque cupiditate dicta dolorum ducimus facilis fugit id
                    illum laudantium magni minima, nobis officia officiis praesentium quia quo reiciendis rem saepe sint
                    tenetur? Aperiam deserunt doloribus eligendi facere ipsam libero non quidem recusandae ullam. Eius
                    inventore ullam ut! Est fuga qui reprehenderit. Ab accusantium ad aliquid architecto cupiditate
                    dolor dolorum ducimus enim eos facere fugiat inventore ipsum iste laudantium necessitatibus, nihil
                    officia perspiciatis porro quae quas qui recusandae repellat sapiente soluta ullam velit vero vitae?
                    Accusantium labore natus obcaecati! Corporis, illo, voluptas! A animi at atque beatae commodi
                    consectetur consequatur, debitis deleniti impedit ipsum iste maiores nam placeat quas quidem rem
                    similique soluta unde ut vel. Cum deserunt, doloribus eveniet impedit natus placeat quas sapiente
                    sint voluptatem.
                </Text>

                <View style={styles.emptySpace}/>
            </ScrollView>


        </SafeAreaView>
    );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#ffffff",
        paddingTop: 50,
        position: "relative"
    },
    emptySpace: {
        height: 50
    },
    inputContainer: {
        position: "relative",
        width: "100%",
        alignItems: "center"
    },
    searchInput: {
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#F5F5F5",
        padding: 10,
        width: '90%',
        borderRadius: 10,
        paddingLeft: 50
    },
    adornmentIcon: {
        position: "absolute",
        right: 30,
        bottom: 15,
        zIndex: 1
    }

});
