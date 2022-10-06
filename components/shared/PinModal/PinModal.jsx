import {Alert, Animated, Image, Modal, SafeAreaView, Text, View} from 'react-native';
import React, {useState} from 'react';
import imageSource from '../../../assets/gifs/forgot_password.gif'
import verificationSuccessful from '../../../assets/gifs/success_password_change.gif'
import verificationFailed from '../../../assets/gifs/verification_failed.gif'

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import styles, {
    ACTIVE_CELL_BG_COLOR,
    CELL_BORDER_RADIUS,
    CELL_SIZE,
    DEFAULT_CELL_BG_COLOR,
    NOT_EMPTY_CELL_BG_COLOR,
} from './style';

const {Value, Text: AnimatedText} = Animated;

const CELL_COUNT = 5;
const source = {
    uri: 'https://user-images.githubusercontent.com/4661784/56352614-4631a680-61d8-11e9-880d-86ecb053413d.png',
};

const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
const animateCell = ({hasValue, index, isFocused}) => {
    Animated.parallel([
        Animated.timing(animationsColor[index], {
            useNativeDriver: false,
            toValue: isFocused ? 1 : 0,
            duration: 250,
        }),
        Animated.spring(animationsScale[index], {
            useNativeDriver: false,
            toValue: hasValue ? 0 : 1,
            duration: hasValue ? 300 : 250,
        }),
    ]).start();
};

const PinModal = ({navigation, modalVisible, setModalVisible, text, to}) => {
    const [value, setValue] = useState('');
    const [pinSubmitSuccess, setPinSubmitSuccess] = useState(false)
    const [pinSubmitFailed, setPinSubmitFailed] = useState(false)
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const modalClosePressed = () => {
        console.log('pressed')
        /*setModalVisible(!modalVisible)
        navigation.navigate(to)*/
    }
    const makePinSubmitSuccess =()=>{
        setPinSubmitSuccess(true)
        setPinSubmitFailed(false)
    }
    const makePinSubmitFailed =()=>{
        setPinSubmitSuccess(false)
        setPinSubmitFailed(true)
    }
    const makePinSubmitFalse =()=>{
        setPinSubmitSuccess(false)
        setPinSubmitFailed(false)
        setValue('')
    }

    const renderCell = ({index, symbol, isFocused}) => {
        const hasValue = Boolean(symbol);
        const animatedCellStyle = {
            backgroundColor: hasValue
                ? animationsScale[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
                })
                : animationsColor[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
                }),
            borderRadius: animationsScale[index].interpolate({
                inputRange: [0, 1],
                outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
            }),
            transform: [
                {
                    scale: animationsScale[index].interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.2, 1],
                    }),
                },
            ],
        };

        // Run animation on next event loop tik
        // Because we need first return new style prop and then animate this value
        setTimeout(() => {
            animateCell({hasValue, index, isFocused});
        }, 0);

        return (
            <AnimatedText
                key={index}
                style={[styles.cell, animatedCellStyle]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor/> : null)}
            </AnimatedText>
        );
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                // Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.root}>
                <View style={styles.modalView}>
                    {
                        (!pinSubmitSuccess && !pinSubmitFailed) &&

                    <>
                        <Image style={styles.icon} source={imageSource}/>
                        <Text style={styles.subTitle}>
                            A verification email has been sent to
                            your registered email address.
                        </Text>

                        <CodeField
                            ref={ref}
                            {...props}
                            value={value}
                            onChangeText={setValue}
                            cellCount={CELL_COUNT}
                            rootStyle={styles.codeFieldRoot}
                            keyboardType="number-pad"
                            textContentType="oneTimeCode"
                            renderCell={renderCell}
                        />
                        <View style={styles.nextButton}
                              // onTouchStart={modalClosePressed}
                              onTouchStart={makePinSubmitSuccess}
                        >
                            <Text style={styles.nextButtonText}>Verify</Text>
                        </View>
                    </>
                    }
                    {
                        (pinSubmitSuccess && !pinSubmitFailed) &&

                        <>
                            <Image style={styles.icon} source={verificationSuccessful}/>
                            <Text style={styles.subTitle}>
                                Verified!
                            </Text>


                            <View style={styles.nextButton}
                                  // onTouchStart={modalClosePressed}
                                  onTouchStart={makePinSubmitFailed}
                            >
                                <Text style={styles.nextButtonText}>Done</Text>
                            </View>
                        </>
                    }
                    {
                        (!pinSubmitSuccess && pinSubmitFailed) &&

                        <>
                            <Image style={styles.icon} source={verificationFailed}/>
                            <Text style={styles.subTitle}>
                                A Verification attempt is failed!
                            </Text>

                                <Text style={styles.verifiedFailedText} onTouchStart={makePinSubmitFalse}>Resend verification code</Text>
                        </>
                    }

                </View>
            </View>
        </Modal>
    );
};

export default PinModal;