import React from "react";
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Image,
    ScrollView,

} from 'react-native';
import { FONTS, COLORS, SIZES, icons } from "../constants";


const BookDetail = ({ route, navigation }) => {

    const [book, setBook] = React.useState(null);


React.useEffect(() => {
        let { book } = route.params;
        setBook(book)
    }, [book])

    function renderBookInfoSection() {
        return (
            <View style={{ flex: 1 }}>
               
               <ImageBackground
                    source={book.bookCover}
                    resizeMode="cover"
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }}
                />
                {/* Color Overlay */}
                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        backgroundColor: book.backgroundColor
                    }}
                >
                    
                </View>

                {/* Navigation header */}
                <View style={{ flexDirection: 'row', paddingHorizontal: SIZES.radius, height: 80, alignItems: 'flex-end' }}>
                    <TouchableOpacity
                        style={{ marginLeft: SIZES.base }}
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={icons.back_arrow_icon}
                           
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: book.navTintColor
                            }}
                        />
                    </TouchableOpacity>

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ ...FONTS.h3, color: book.navTintColor }}>Book Detail</Text>
                    </View>

                    <TouchableOpacity
                        style={{ marginRigth: SIZES.base }}
                        onPress={() => console.log("Click More")}
                    >
                        <Image
                            source={icons.more_icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: book.navTintColor,
                                alignSelf: 'flex-end'
                            }}
                        />
                    </TouchableOpacity>
                </View>

                {/* Book Cover */}
                <View style={{ flex: 5, paddingTop: SIZES.padding2, alignItems: 'center' }}>
                    <Image
                        source={book.bookCover}
                        resizeMode="contain"
                        style={{
                            flex: 1,
                            width: 150,
                            height: "auto"
                        }}
                    />
                </View>

                {/* Book Name and Author */}
                <View style={{ flex: 1.8, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ ...FONTS.h2, color: book.navTintColor }}>{book.bookName}</Text>
                    <Text style={{ ...FONTS.body3, color: book.navTintColor }}>{book.author}</Text>
                </View>

                {/* Book Info */}
                <View
                    style={{
                        flexDirection: 'row',
                        paddingVertical: 20,
                        margin: SIZES.padding,
                        borderRadius: 30,
                        backgroundColor: "rgba(0,0,0,0.3)"
                    }}
                >
                  
                    {/* Rating */}
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>{book.rating}</Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.white }}>Rating</Text>
                    </View>

                 

                    {/* Pages */}
                    <View style={{ flex: 1, paddingHorizontal: SIZES.radius, alignItems: 'center' }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>{book.pageNo}</Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.white }}>Number of Page</Text>
                    </View>

                   

                    {/* Language */}
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>{book.language}</Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.white }}>Language</Text>
                    </View>
                </View>
            </View>
        )
    }

    function renderBookDescription() {
        return(
                <View>
                {/* Description */}
                <ScrollView
                    contentContainerStyle={{ paddingLeft: SIZES.padding2 }}
                  
                >
                    <Text style={{ ...FONTS.h2, color: COLORS.white, marginBottom:10, marginTop: SIZES.padding  }}>Description</Text>
                    <Text style={{ ...FONTS.body2, color: COLORS.lightGray }}>{book.description}</Text>
                </ScrollView>
            </View>
        )
    }

    function renderBottomButton() {
        return (
      
            <View style={{ marginLeft: 15,width: "94%" , flex: 2, flexDirection: 'colomn' }}>
               
                <TouchableOpacity

                    style={{
                        flex:.65,
                        backgroundColor: "#FF6969D9",
                        marginHorizontal: SIZES.base,
                        marginVertical: SIZES.base,
                        borderRadius: SIZES.radius,
                        alignItems: 'center',
                        justifyContent: 'center',
                        
                    }}
                    onPress={() => console.log("Start Reading")}
                >
                    
                    <Text style={{ ...FONTS.h3, color: COLORS.white }}>Start Reading</Text>
                </TouchableOpacity>
 {/* Bookmark */}
                <View style= {{flex: 1 , flexDirection: 'row-reverse'}}> 

                <TouchableOpacity
                    style={{
                        
                        width: 60,
                        backgroundColor: "#000",
                        marginLeft: SIZES.padding,
                        marginVertical: SIZES.base,
                        borderRadius: SIZES.radius,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => console.log("Bookmark")}
                >
                    <Image
                        source={icons.bookmark_icon}
                        resizeMode="contain"
                        style={{
                            
                            width: 25,
                            height: 25,
                            tintColor: COLORS.lightGray2
                        }}
                    />
                </TouchableOpacity>

                {/* Start Reading */}
                <TouchableOpacity
                    style={{
                        flex:1,
                        backgroundColor: "#FF6969D9",
                        marginHorizontal: SIZES.base,
                        marginVertical: SIZES.base,
                        borderRadius: SIZES.radius,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => console.log("Start Reading")}
                >
                    
                    <Text style={{ ...FONTS.h3, color: COLORS.white }}> Listening</Text>
                </TouchableOpacity>
                </View>    
            </View>

        )
    }

    if (book) {
        return (
            <View style={{ flex: 1, backgroundColor: COLORS.black }}>
                {/* Book Cover Section */}
                <View style={{ flex: 4 }}>
                    {renderBookInfoSection()}
                </View>

                {/* Description */}
                <View style={{ flex: 2 }}>
                    {renderBookDescription()}
                </View>

                {/* Buttons */}
                <View style={{ height: 100 ,marginBottom: 30}}>
                    {renderBottomButton()}
                </View>
            </View>
        )
    } else {
        return (<></>)
    }

}

export default BookDetail;