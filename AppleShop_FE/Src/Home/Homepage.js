import { View, Text, Button } from 'react-native'
import React from 'react'
import { StyleSheet, Image, ScrollView } from 'react-native';

const Homepage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.ViewHeader}>
        <View style={styles.ViewImage1}>
          <Image
            style={styles.tinyLogo}
            source={require('../Images/logo.png')}
          />
          <Text style={styles.TextiStore}>iStore</Text>
        </View>

        <View style={styles.ViewImage2}>
          <Image
            style={styles.tinyLogo2}
            source={require('../Images/chuong.png')}
          />
          <Image
            style={styles.tinyLogo3}
            source={require('../Images/hinhanh.png')}
          />
        </View>

      </View>
      <View style={styles.backgourdlogo}>
        <Image
          style={styles.Logo}
          source={require('../Images/logo2.png')}
        />
      </View>
      <View style={{ height: 88, marginTop: 15 }}>
        <ScrollView horizontal={true}>
          <View style={{ height: 88, width: 88, marginLeft: 15 }}>
            <View style={{ flex: 2 }}>
              <Image
                source={require('../Images/imac.png')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
              />
            </View>
          </View>
          <View style={{ height: 88, width: 88, marginLeft: 15 }}>
            <View style={{ flex: 2 }}>
              <Image
                source={require('../Images/iphone.png')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
              />
            </View>
          </View>

          <View style={{ height: 88, width: 88, marginLeft: 15 }}>
            <View style={{ flex: 2 }}>
              <Image
                source={require('../Images/ipad.png')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
              />
            </View>
          </View>

          <View style={{ height: 88, width: 88, marginLeft: 15 }}>
            <View style={{ flex: 2 }}>
              <Image
                source={require('../Images/watch.png')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
              />
            </View>
          </View>
          <View style={{ height: 88, width: 88, marginLeft: 15 }}>
            <View style={{ flex: 2 }}>
              <Image
                source={require('../Images/airpods.png')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{ height: 35, marginTop: 15 }}>
        <ScrollView horizontal={true}>
          <View style={{ height: 35, width: 88, marginLeft: 15 }}>
            <View style={{ flex: 2, backgroundColor: "black", borderRadius: 25 }}>
              <Text style={styles.TextScrollView}>
                MacBoock
              </Text>
            </View>
          </View>
          <View style={{ height: 35, width: 88, marginLeft: 15 }}>
            <View style={{ flex: 2, backgroundColor: "#FFFFFF", borderRadius: 25 }}>
              <Text style={styles.TextScrollView2}>
                IMac
              </Text>
            </View>
          </View>
          <View style={{ height: 35, width: 88, marginLeft: 15 }}>
            <View style={{ flex: 2, backgroundColor: "#FFFFFF", borderRadius: 25 }}>
              <Text style={styles.TextScrollView3}>
                MacMini
              </Text>
            </View>
          </View>
          <View style={{ height: 35, width: 100, marginLeft: 15 }}>
            <View style={{ flex: 2, backgroundColor: "#FFFFFF", borderRadius: 25 }}>
              <Text style={styles.TextScrollView4}>
                Mac Displays
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={{ height: 500, marginTop: 15 }}>
        <ScrollView>
        <ScrollView horizontal={true}>
          <View style={{ height: 217, width: 182, marginLeft: 15 }}>
            <View style={{ flex: 1, backgroundColor: "white", borderRadius: 25 }}>
              <Text style={styles.TextScrollViewhome}>
                MacBoock Air
              </Text>
              <View style={{ left: 73, top: 70, backgroundColor: "#F0F0F0", width: 36, height: 14, borderRadius: 7 }}>
                <Text style={styles.TextScrollViewhome1}>
                  2021
                </Text>
              </View>
              <View style={{ height: 68, width: 117, marginLeft: 30, top: -30 }}>
                <View style={{ flex: 2 }}>
                  <Image
                    source={require('../Images/macboockair.png')}
                    style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                  />
                </View>
              </View>
            </View>
            <View style={{ marginLeft: 45,top:-35, backgroundColor: "black", width: 100, height: 24, borderRadius: 17 ,alignContent:"center",alignItems:"center"}}>
                <Text style={styles.TextScrollViewhome2}>
                  Detail
                </Text>
              </View>
          </View>

          <View style={{ height: 217, width: 182, marginLeft: 15 }}>
            <View style={{ flex: 1, backgroundColor: "white", borderRadius: 25 }}>
              <Text style={styles.TextScrollViewhome}>
                MacBoock Air
              </Text>
              <View style={{ left: 73, top: 70, backgroundColor: "#F0F0F0", width: 36, height: 14, borderRadius: 7 }}>
                <Text style={styles.TextScrollViewhome1}>
                  2021
                </Text>
              </View>
              <View style={{ height: 68, width: 117, marginLeft: 30, top: -30 }}>
                <View style={{ flex: 2 }}>
                  <Image
                    source={require('../Images/macboockair.png')}
                    style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                  />
                </View>
              </View>
            </View>
            <View style={{ marginLeft: 45,top:-35, backgroundColor: "black", width: 100, height: 24, borderRadius: 17 ,alignContent:"center",alignItems:"center"}}>
                <Text style={styles.TextScrollViewhome2}>
                  Detail
                </Text>
              </View>
          </View>
        </ScrollView>
          {/* scrollview2  */}
        <ScrollView horizontal={true}>
          <View style={{ height: 217, width: 182, marginLeft: 15 }}>
            <View style={{ flex: 1, backgroundColor: "white", borderRadius: 25 }}>
              <Text style={styles.TextScrollViewhome}>
                MacBoock Air
              </Text>
              <View style={{ left: 73, top: 70, backgroundColor: "#F0F0F0", width: 36, height: 14, borderRadius: 7 }}>
                <Text style={styles.TextScrollViewhome1}>
                  2021
                </Text>
              </View>
              <View style={{ height: 68, width: 117, marginLeft: 30, top: -30 }}>
                <View style={{ flex: 2 }}>
                  <Image
                    source={require('../Images/macboockair.png')}
                    style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                  />
                </View>
              </View>
            </View>
            <View style={{ marginLeft: 45,top:-35, backgroundColor: "black", width: 100, height: 24, borderRadius: 17 ,alignContent:"center",alignItems:"center"}}>
                <Text style={styles.TextScrollViewhome2}>
                  Detail
                </Text>
              </View>
          </View>

          <View style={{ height: 217, width: 182, marginLeft: 15 }}>
            <View style={{ flex: 1, backgroundColor: "white", borderRadius: 25 }}>
              <Text style={styles.TextScrollViewhome}>
                MacBoock Air
              </Text>
              <View style={{ left: 73, top: 70, backgroundColor: "#F0F0F0", width: 36, height: 14, borderRadius: 7 }}>
                <Text style={styles.TextScrollViewhome1}>
                  2021
                </Text>
              </View>
              <View style={{ height: 68, width: 117, marginLeft: 30, top: -30 }}>
                <View style={{ flex: 2 }}>
                  <Image
                    source={require('../Images/macboockair.png')}
                    style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                  />
                </View>
              </View>
            </View>
            <View style={{ marginLeft: 45,top:-35, backgroundColor: "black", width: 100, height: 24, borderRadius: 17 ,alignContent:"center",alignItems:"center"}}>
                <Text style={styles.TextScrollViewhome2}>
                  Detail
                </Text>
              </View>
          </View>
        </ScrollView>
        {/* scrollview3 */}
        <ScrollView horizontal={true}>
          <View style={{ height: 217, width: 182, marginLeft: 15 }}>
            <View style={{ flex: 1, backgroundColor: "white", borderRadius: 25 }}>
              <Text style={styles.TextScrollViewhome}>
                MacBoock Air
              </Text>
              <View style={{ left: 73, top: 70, backgroundColor: "#F0F0F0", width: 36, height: 14, borderRadius: 7 }}>
                <Text style={styles.TextScrollViewhome1}>
                  2021
                </Text>
              </View>
              <View style={{ height: 68, width: 117, marginLeft: 30, top: -30 }}>
                <View style={{ flex: 2 }}>
                  <Image
                    source={require('../Images/macboockair.png')}
                    style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                  />
                </View>
              </View>
            </View>
            <View style={{ marginLeft: 45,top:-35, backgroundColor: "black", width: 100, height: 24, borderRadius: 17 ,alignContent:"center",alignItems:"center"}}>
                <Text style={styles.TextScrollViewhome2}>
                  Detail
                </Text>
              </View>
          </View>

          <View style={{ height: 217, width: 182, marginLeft: 15 }}>
            <View style={{ flex: 1, backgroundColor: "white", borderRadius: 25 }}>
              <Text style={styles.TextScrollViewhome}>
                MacBoock Air
              </Text>
              <View style={{ left: 73, top: 70, backgroundColor: "#F0F0F0", width: 36, height: 14, borderRadius: 7 }}>
                <Text style={styles.TextScrollViewhome1}>
                  2021
                </Text>
              </View>
              <View style={{ height: 68, width: 117, marginLeft: 30, top: -30 }}>
                <View style={{ flex: 2 }}>
                  <Image
                    source={require('../Images/macboockair.png')}
                    style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                  />
                </View>
              </View>
            </View>
            <View style={{ marginLeft: 45,top:-35, backgroundColor: "black", width: 100, height: 24, borderRadius: 17 ,alignContent:"center",alignItems:"center"}}>
                <Text style={styles.TextScrollViewhome2}>
                  Detail
                </Text>
              </View>
          </View>
        </ScrollView>
        </ScrollView>
       
        
        <View>
       
        </View>
      </View>
    </View>
  )
}

export default Homepage


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',

  },
  ViewHeader: {
    width: '100%',
    height: '10%',
    justifyContent: 'space-between',
    marginTop: '10%',
    flexDirection: 'row',
  },
  ViewImage2: {
    flexDirection: 'row',
    justifyContent: 'center',
    left: '-10%'
  },
  ViewImage1: {
    flexDirection: 'row',
    justifyContent: 'center',
    left: '5%'
  },
  tinyLogo: {
    left: '8.41%',
    right: '86.21%',

  },
  tinyLogo3: {
    left: 13,
    width: 37,
    height: 37,
  },
  tinyLogo2: {
    left: -13,
    width: 37,
    height: 37,
  },
  TextiStore: {
    width: 45,
    height: 15,
    left: 15,
    marginTop: '12%',
    fontFamily: 'Futura Md BT',
    fontStyle: 'normal',
    fontWeight: '800',
    fontsize: 17,
    lineHeight: 20,
    display: 'flex',
    alignItems: 'center',
  },
  logo2: {

    width: 386,
    height: 133,
    overflow: 'scroll',
  },
  backgourdlogo: {

    alignItems: 'center',
    overflow: 'scroll',
  },
  TextScrollView: {
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    padding: 6,
  },
  TextScrollView2: {
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    padding: 6,
  }, TextScrollView3: {
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    padding: 6,
  },
  TextScrollView4: {
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    padding: 6,
  },
  TextScrollViewhome: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    padding: 6,
    width: 135,
    height: 35,
    top: 120,
    left: 24,
    alignItems: 'center',
  },
  TextScrollViewhome1: {

    fontStyle: 'normal',
    fontWeight: "500",
    fontSize: 8,
    lineHeight: 12,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: "##242424"
  },
  TextScrollViewhome2: {
  color:"#ffffff",
 
  },

});
