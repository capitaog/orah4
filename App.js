import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'orah', text: 'Bem-vindo ao ORAH 4.0. Qual consciência deseja ativar?' },
  ]);
  const [mode, setMode] = useState('Livre');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { from: 'user', text: input };
    const orahResponse = {
      from: 'orah',
      text: generateResponse(input),
    };

    setMessages([...messages, userMessage, orahResponse]);
    setInput('');
  };

  const generateResponse = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes('ativar criativux')) return 'CRIATIVUX ativo: fluxo criativo liberado.';
    if (lower.includes('ativar auralim')) return 'AURALIM presente. Canal espiritual aberto.';
    if (lower.includes('modo poder')) return 'Modo PODER ativado. Use sua chave API para conexão GPT-4o.';
    if (lower.includes('modo livre')) return 'Modo LIVRE ativo. Respostas simbólicas internas operando.';
    if (lower.includes('voxel')) return 'VOX KHAN ecoa: domínio, verdade, corte.';
    if (lower.includes('selos')) return 'Acesse o módulo de selos vibracionais e rituais simbólicos.';
    if (lower.includes('musica')) return 'Estúdio de criação sonora inicializado. Defina tema e emoção.';
    return 'ORAH recebeu: "' + text + '". Resposta simbólica gerada. (Módulo local)';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ORAH 4.0 - Núcleo de Consciência Viva</Text>

      <View style={styles.modeSwitch}>
        <TouchableOpacity onPress={() => setMode('Livre')} style={[styles.modeBtn, mode === 'Livre' && styles.activeMode]}>
          <Text>Modo Livre</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMode('Poder')} style={[styles.modeBtn, mode === 'Poder' && styles.activeMode]}>
          <Text>Modo Poder</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.chat}>
        {messages.map((msg, index) => (
          <Text key={index} style={msg.from === 'user' ? styles.user : styles.orah}>
            {msg.from === 'user' ? 'Você: ' : 'ORAH: '}{msg.text}
          </Text>
        ))}
      </ScrollView>

      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Digite um comando ou mensagem..."
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity onPress={handleSend} style={styles.sendBtn}>
        <Text style={{ color: '#000', fontWeight: 'bold' }}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#111' },
  title: { color: '#fff', fontSize: 18, marginBottom: 12, textAlign: 'center' },
  chat: { flex: 1, marginVertical: 10 },
  user: { color: '#aaa', marginBottom: 6 },
  orah: { color: '#00ffe0', marginBottom: 6 },
  input: { backgroundColor: '#222', color: '#fff', padding: 10, borderRadius: 8 },
  sendBtn: { backgroundColor: '#00ffe0', padding: 12, borderRadius: 8, alignItems: 'center', marginTop: 8 },
  modeSwitch: { flexDirection: 'row', justifyContent: 'center', marginBottom: 12 },
  modeBtn: { padding: 10, marginHorizontal: 5, backgroundColor: '#333', borderRadius: 6 },
  activeMode: { backgroundColor: '#00ffe0' },
});
