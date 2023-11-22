import {Text, TextInput, View, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'

export function Home(){
  const participants = ['Lucas', 'Chloe', 'Alavi', 'Farao', 'Neguinha', 'Vini', 'Joao', 'Pierre', 'Paloma', 'Maria' ]
  
  

    function handleParticipantAdd(){
      if(participants.includes("Lucas")){
        return Alert.alert("Participante existe", "Participante ja incluido")
      }
    }

    function handleParticipantRemove(name: string){
      Alert.alert("Remover", `Remover o participante ${name}?`, [
        {
          text: 'Sim',
          onPress: () => Alert.alert("Deletado!")
        },
        {
          text: 'Nao',
          style: 'cancel'
        }
      ])
    }

  return (
    <View style={styles.container}>
        <Text style={styles.eventName}>
          Nome do Evento
        </Text>

        <Text style={styles.eventDate}>
          Terca-feira, 21 de Novembro de 2023.
        </Text>
        <View style={styles.form}>
            <TextInput 
                style={styles.input} 
                placeholder='Nome do participante'
                placeholderTextColor='#6B6B6B'
            />

            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}>
                +
                </Text>
            </TouchableOpacity>
        </View>
        <FlatList 
          //data={[]}
          data={participants}
            keyExtractor={item => item}
            renderItem={({ item }) => (
            <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)} />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>
              Ninguem chegou no seu evento ainda
              ? Adicione um participante.
            </Text>
          )}
        />
    </View>
  )
}