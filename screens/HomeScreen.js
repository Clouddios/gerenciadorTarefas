import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';

export default function HomeScreen({ navigation }) {
  const [tarefas, setTarefas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchTarefas = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://10.68.152.144:3000/tarefas');
      setTarefas(response.data);
    } catch (err) {
      setError('Erro ao buscar tarefas');
      console.error('Erro ao buscar tarefas:', err);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchTarefas();
    }, [])
  );

  useEffect(() => {
    fetchTarefas();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <FlatList
          data={tarefas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.taskContainer}>
              <Text style={styles.taskText}>Descrição: {item.descricao}</Text>
              <Text>Status: {item.status}</Text>
              <Text>Prioridade: {item.prioridade}</Text>
              <View style={styles.buttonContainer}>
                <Button
                  title="Editar"
                  onPress={() => navigation.navigate('EditarTarefa', { tarefa: item })}
                  color="#4CAF50"
                />
                <Button
                  title="Excluir"
                  onPress={async () => {
                    await axios.delete(`http://10.68.152.144:3000/tarefas/${item.id}`);
                    fetchTarefas();
                  }}
                  color="#FF6347"
                />
              </View>
            </View>
          )}
        />
      )}
      <Button
        title="Nova Tarefa"
        onPress={() => navigation.navigate('NovaTarefa')}
        color="#4682B4"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  taskContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  taskText: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
