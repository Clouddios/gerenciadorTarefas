import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Importe o Picker
import axios from 'axios';

export default function EditarTarefaScreen({ route, navigation }) {
  const { tarefa } = route.params;
  const [descricao, setDescricao] = useState(tarefa.descricao);
  const [status, setStatus] = useState(tarefa.status); // Status como um estado

  const atualizarTarefa = async () => {
    if (descricao.trim()) {
      await axios.put(`http://10.68.152.144/tarefas/${tarefa.id}`, { descricao, status });
      navigation.goBack();
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
        onValueChange={(itemValue) => setStatus(itemValue)} // Atualiza o status selecionado
        style={styles.picker}
      >
        <Picker.Item label="Pendente" value="Pendente" />
        <Picker.Item label="Em andamento" value="Em andamento" />
        <Picker.Item label="Concluída" value="Concluída" />
      </Picker>
      <Button title="Salvar Alterações" onPress={atualizarTarefa} />
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
