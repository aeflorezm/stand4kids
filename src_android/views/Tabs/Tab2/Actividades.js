import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import BadgeActivity from './components/badgeActivity';

var { height, width } = Dimensions.get('window');

export default class App extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 40 }}>
        <Text
          style={{ fontSize: 30, fontWeight: '700', paddingHorizontal: 20 }}>
          Actividades
        </Text>
        <ScrollView>
          <View
            style={{
              paddingHorizontal: 20,
              marginTop: 10,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}>
            <BadgeActivity
              title="Levantamiento de cabeza"
              source_image={require('./assets/baby-mobile.png')}
              background_color="#64d8cb"
              border_color="#64d8cb"
            />
            <BadgeActivity
              title="Desarrollo Visual"
              source_image={require('./assets/abacus.png')}
              background_color="#CE90EB"
              border_color="#CE90EB"
            />
            <BadgeActivity
              title="Reflejo  de succión"
              source_image={require('./assets/pacifier.png')}
              background_color="#90D3EB"
              border_color="#90D3EB"
            />
            <BadgeActivity
              title="Generación de sonidos"
              source_image={require('./assets/rattle.png')}
              background_color="#E4EB90"
              border_color="#E4EB90"
            />
            <BadgeActivity
              title="Posición de sedente"
              source_image={require('./assets/blocks.png')}
              background_color="#EB90AC"
              border_color="#EB90AC"
            />
            <BadgeActivity
              title="Empatía"
              source_image={require('./assets/teddy-bear.png')}
              background_color="#EFAC4E"
              border_color="#EFAC4E"
            />
            <BadgeActivity
              title="Reflejo del Moro"
              source_image={require('./assets/puzzle.png')}
              background_color="#EFE969"
              border_color="#EFE969"
            />
            <BadgeActivity
              title="Flexión de extremidades"
              source_image={require('./assets/pyramid.png')}
              background_color="#A684E8"
              border_color="#A684E8"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}