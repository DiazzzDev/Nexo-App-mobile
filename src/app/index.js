import { Link } from 'expo-router';
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const STUDENT = {
  name: 'Edwin Adrian Diaz Henriquez',
  carnet: '20220281',
  section: '1A',
};

function DataLine({ label, value }) {
  return (
    <View style={styles.dataLine}>
      <Text style={styles.dataLabel}>{label}</Text>
      <Text style={styles.dataValue}>{value}</Text>
    </View>
  );
}

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <Image source={require('../../assets/planet-icon.png')} style={styles.logo} />
        <Text style={styles.eyebrow}>EXPLORA EL UNIVERSO</Text>
        <Text style={styles.title}>Planetas</Text>
        <Text style={styles.description}>Consulta los planetas del universo Dragon Ball en tiempo real.</Text>

        <View style={styles.studentCard}>
          <Text style={styles.cardTitle}>PERFIL DEL ESTUDIANTE</Text>
          <DataLine label="Nombre" value={STUDENT.name} />
          <DataLine label="Carnet" value={STUDENT.carnet} />
          <DataLine label="Sección y grupo" value={STUDENT.section} />
        </View>

        <Link asChild href="/catalog">
          <Pressable accessibilityRole="button" style={styles.cta}>
            <Text style={styles.ctaText}>Ver planetas</Text>
            <Text style={styles.ctaArrow}>↗</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: '#FCFAF5', flex: 1 },
  content: { flex: 1, justifyContent: 'center', padding: 24 },
  logo: { alignSelf: 'flex-start', borderRadius: 16, height: 56, marginBottom: 24, width: 56 },
  eyebrow: { color: '#64705E', fontSize: 11, letterSpacing: 1.5 },
  title: { color: '#26312B', fontSize: 42, letterSpacing: -1, lineHeight: 44, marginTop: 9 },
  description: { color: '#69736D', fontSize: 15, lineHeight: 22, marginTop: 16, maxWidth: 300 },
  studentCard: { backgroundColor: '#FFFDF8', borderColor: '#E8E1D5', borderRadius: 16, borderWidth: 1, marginTop: 26, padding: 18 },
  cardTitle: { color: '#56635B', fontSize: 11, letterSpacing: 1.1, marginBottom: 8 },
  dataLine: { borderTopColor: '#E8E1D5', borderTopWidth: 1, paddingVertical: 11 },
  dataLabel: { color: '#69736D', fontSize: 12 },
  dataValue: { color: '#26312B', fontSize: 16, marginTop: 3 },
  cta: { alignItems: 'center', backgroundColor: '#425B4A', borderRadius: 14, flexDirection: 'row', justifyContent: 'center', marginTop: 20, paddingVertical: 16 },
  ctaText: { color: '#FFFFFF', fontSize: 16 },
  ctaArrow: { color: '#FFFFFF', fontSize: 20, marginLeft: 10 },
});
