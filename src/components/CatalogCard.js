import { Image, StyleSheet, Text, View } from 'react-native';

export default function CatalogCard({ product }) {
  return (
    <View style={styles.card}>
      <View style={styles.imageBox}>
        <Image accessibilityLabel={product.name} source={{ uri: product.image }} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.title}>{product.name}</Text>
        <Text numberOfLines={3} style={styles.description}>{product.description}</Text>
        <View style={styles.footer}>
          <Text style={styles.status}>{product.isDestroyed ? 'Destruido' : 'Activo'}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#FFFDF8', borderColor: '#E8E1D5', borderRadius: 16, borderWidth: 1, flexDirection: 'row', marginBottom: 12, overflow: 'hidden', padding: 12 },
  imageBox: { alignItems: 'center', backgroundColor: '#F1ECE3', borderRadius: 14, height: 98, justifyContent: 'center', width: 92 },
  image: { height: 74, resizeMode: 'contain', width: 64 },
  content: { flex: 1, justifyContent: 'space-between', paddingLeft: 13, paddingVertical: 3 },
  title: { color: '#26312B', fontSize: 15, lineHeight: 20 },
  description: { color: '#69736D', fontSize: 12, lineHeight: 17, marginTop: 6 },
  footer: { alignItems: 'center', borderTopColor: '#EDE7DD', borderTopWidth: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 8, paddingTop: 8 },
  status: { color: '#56635B', fontSize: 13 },
});
