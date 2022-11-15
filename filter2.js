import 'react';
import { Image, View } from 'react-native';

const Filter2 = ({
    face: {
        bounds: {
            size: {
                width: faceWidth,
                height: faceHeight
            }
        },
        leftEyePosition,
        rightEyePosition
    }
}) => {
    var glassesWidth = faceWidth;
    var glassesHeight = faceHeight / 2;

    var transformAngle = (angleRad = Math.atan((rightEyePosition.y - leftEyePosition.y) / (rightEyePosition.x - leftEyePosition.x))) => (angleRad * 180) / Math.PI

    return (
        <View style={{
            position: 'absolute',
            left: leftEyePosition.x - glassesWidth * 0.35,
            top: leftEyePosition.y - glassesHeight * 1.5
        }}>
            <Image
                source={require('./PRO-LookMeAppFilters-main/crown-pic2.png')}
                style={{
                    width: glassesWidth,
                    height: glassesHeight,
                    resizeMode: 'contain',
                    transform: [{ rotate: `${transformAngle()}deg` }]
                }}
            />
        </View>
    )
};

export default Filter2;