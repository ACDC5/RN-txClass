
import {StyleSheet} from 'react-native';
import {screenSize} from "../../utils/tools";

const styles = StyleSheet.create({
    recomCourseBoard:{
        flexDirection:'row',
        flexWrap:'wrap',
        backgroundColor:'#fff',
        borderBottomColor:'#eee',
        padding:5
    },

    courseItem:{
        width:191,
        padding:5
    },
    imgView:{
        width:screenSize.width,
        height:115
    },
    courseName:{
        marginTop:5,
        marginBottom:5
    },
    courseNameText:{
        fontSize:13
    },
    teacherInfo:{
        flexDirection:'row',
        alignItems:'center',
        height:30
    },
    teacherImg:{
        width:25,
        height:25,
        borderRadius:15,
        marginRight:5
    },
    teacherName:{
        fontSize:12,
        color:'#666'
    },
    price:{
        alignItems:'flex-end',
        marginTop: 5
    },
    priceNum:{
        color:'#f40'
    }

})

export default styles;
