import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Importe o Picker
import axios from 'axios';

export default function NovaTarefaScreen({ navigation }) {
  const [descricao, setDescricao] = useState('');
  const [status, setStatus] = useState('Pendente'); // Status com valor padrão
  const [prioridade, setPrioridade] = useState('Baixa'); // Prioridade com valor padrão

  const criarTarefa = async () => {
    if (descricao.trim()) {
      await axios.post('http://10.68.152.144:3000/tarefas', {
        descricao,
        status,
        prioridade,
      });
      navigation.goBack(); // Volta para a tela anterior (lista de tarefas)
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Descrição da tarefa"
      />
      
      <Text>Status</Text>
      <Picker
        selectedValue={status}
        onValueChange={(itemValue) => setStatus(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Pendente" value="Pendente" />
        <Picker.Item label="Em andamento" value="Em andamento" />
        <Picker.Item label="Concluída" value="Concluída" />
      </Picker>

      <Text>Prioridade</Text>
      <Picker
        selectedValue={prioridade}
        onValueChange={(itemValue) => setPrioridade(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Baixa" value="Baixa" />
        <Picker.Item label="Média" value="Média" />
        <Picker.Item label="Alta" value="Alta" />
      </Picker>

      <Button title="Criar Tarefa" onPress={criarTarefa} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 12,
  },
});
