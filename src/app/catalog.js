import { router } from 'expo-router';
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import CatalogCard from '../components/CatalogCard';
import useCatalog from '../hooks/useCatalog';

export default function CatalogScreen() {
  const { items, isLoading, error, refresh } = useCatalog();

  if (isLoading) {
    return <View style={styles.center}><ActivityIndicator color="#425B4A" size="large" /><Text style={styles.loading}>Cargando planetas…</Text></View>;
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorTitle}>Conexión interrumpida</Text>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity accessibilityRole="button" onPress={refresh} style={styles.retry}><Text style={styles.retryText}>Reintentar</Text></TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={items}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <CatalogCard product={item} />}
        contentContainerStyle={styles.list}
        refreshing={isLoading}
        onRefresh={refresh}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<View style={styles.header}><Text style={styles.kicker}>DRAGON BALL API</Text><Text style={styles.title}>Planetas del{`\n`}universo.</Text><Text style={styles.caption}>{items.length} planetas disponibles</Text></View>}
      />
      <TouchableOpacity accessibilityRole="button" onPress={() => router.back()} style={styles.back}><Text style={styles.backText}>← Mi perfil</Text></TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: '#FCFAF5', flex: 1 },
  list: { padding: 18, paddingBottom: 84 },
  header: { marginBottom: 18, marginTop: 10 },
  kicker: { color: '#64705E', fontSize: 11, letterSpacing: 1.5 },
  title: { color: '#26312B', fontSize: 32, letterSpacing: -1, lineHeight: 35, marginTop: 7 },
  caption: { color: '#69736D', fontSize: 13, marginTop: 10 },
  center: { alignItems: 'center', backgroundColor: '#FCFAF5', flex: 1, justifyContent: 'center', padding: 28 },
  loading: { color: '#69736D', marginTop: 14 },
  errorTitle: { color: '#26312B', fontSize: 22 },
  errorText: { color: '#69736D', marginTop: 10, textAlign: 'center' },
  retry: { backgroundColor: '#425B4A', borderRadius: 14, marginTop: 20, paddingHorizontal: 22, paddingVertical: 13 },
  retryText: { color: '#FFFFFF' },
  back: { alignItems: 'center', backgroundColor: '#FFFDF8', borderTopColor: '#E8E1D5', borderTopWidth: 1, paddingVertical: 16 },
  backText: { color: '#26312B', fontSize: 15 },
});
