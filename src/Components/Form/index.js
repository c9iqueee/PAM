import { TextInput, View, Text, Pressable, FlatList } from "react-native-web";
import Resultado from "./Resultado";
import { useState } from "react";
import styles from "./style";

export default function Form()
{
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [mensagem, setMensagem] = useState('Preencha o peso e a altura');
    const [imc, setImc] = useState(null);
    const [buttonTitle, setButtonTitle] = useState('Calcular');

    const [imcList, setImcList] = useState([]);

    function calcularImc(){
        let totalImc = (weight/(height*height)).toFixed(2);
        setImcList((arr) => [...arr, {id: new Date().getTime(), imc: totalImc}]);
        return setImc(totalImc);
    }

    function validarImc()
    {
        if(weight != null && height != null) {
            calcularImc();
            setHeight(null);
            setWeight(null);
            setMensagem('Seu IMC é igual: ');
            setButtonTitle('Calcular novamente');
        } else {
            setImc();
        setButtonTitle('Calcular');
        setMensagem('Preencha o peso e a altura');
        }
    }

    return(
        <View style={styles.formContext}>
            {imc == null ?
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura:</Text>
                <TextInput 
                placeholder="Ex: 1.75" 
                inputMode="numeric"
                onChangeText={setHeight}    
                value={height}
                style={styles.formInput}
                />

                <Text style={styles.formLabel}>Peso:</Text>
                <TextInput 
                placeholder="Ex: 60.5 (KG)" 
                inputMode="numeric"
                onChangeText={setWeight}  
                value={weight}
                style={styles.formInput}
                />

                <Pressable
                title={buttonTitle}
                style={styles.formButton}
                onPress={() => validarImc()}
                >
                    <Text style={styles.formButtonText}>{buttonTitle}</Text>
                </Pressable>
            </View>

            :

            <View style={styles.showImc}>
                <Resultado messageResultImc={mensagem} resultImc={imc}/>

                <Pressable
                title={buttonTitle}
                style={styles.formButton}
                onPress={() => validarImc()}
                >
                    <Text style={styles.formButtonText}>{buttonTitle}</Text>
                </Pressable>
            </View>

            }   

            <FlatList
                style={styles.imcList}
                data={imcList.reverse()}
                renderItem={({item}) => {
                    return (
                        <Text style={styles.imcListItem}>
                            <Text style={styles.imcListItemText}>Resultado IMC 
                            = </Text> {item.imc}
                        </Text>
                    )
                }}
                keyExtractor={(item) => {
                    item.id
                }}
            />
        </View>
    );
}