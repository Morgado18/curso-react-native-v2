
import React, { useState } from "react";
import { 
    TextInput, View, Text, Button,
    TouchableOpacity, Vibration,
    Pressable, Keyboard, FlatList
} from "react-native";

import ResultImc from "../ResultImc";
import styles from "./styles";

export default function Form(){

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura!");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [errorMessage, setErrorMessage] = useState(null);
    const [imcList, setImcList] = useState([])

    function imcCalculator(){
        let heightFormated = height.replace(',','.'); // se for colocado vírgula gera erro, ent formatos o hight que est sendo enviado
        return setImc(
            ((weight/(heightFormated*heightFormated)).toFixed(2)) // formula pra calc imc  exibe apenas duas casas decimais
        );
    }

    function validationImc(){
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setErrorMessage(null)
            setMessageImc("Seu IMC é igual a:")
            setTextButton("Calcular Novamente")
        }else{
            verificationImc()
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("Preencha o peso e altura!")
        }
    }

    function verificationImc(){
        if(imc == null){
            Vibration.vibrate();
            setErrorMessage("Campo obrigatório*")
        }/* else{
            setErrorMessage(null)
        } */
    }
    
    return (
        <View style={styles.formContext}>
            {imc == null ?
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                    <Text style={styles.formLabel}>Altura</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput
                        style={styles.formInput}
                        onChangeText={setHeight}
                        value={height}
                        placeholder="Ex. 1.84"
                        keyboardType="numeric"
                    />

                    <Text style={styles.formLabel}>Peso</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput
                        style={styles.formInput}
                        onChangeText={setWeight}
                        value={weight}
                        placeholder="Ex. 81.284"
                        keyboardType="numeric"
                    />

                    <TouchableOpacity 
                        onPress={function(){validationImc()}}
                        style={styles.formButton}
                    >
                        <Text style={styles.formButtonText}>{textButton}</Text>
                    </TouchableOpacity>
                </Pressable>
                :
                <View style={styles.exhibitionResult}>
                    <ResultImc messageResultImc={messageImc} resultImc={imc}/>
                    <TouchableOpacity 
                        onPress={function(){validationImc()}}
                        style={styles.formButton}
                    >
                        <Text style={styles.formButtonText}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    );
}