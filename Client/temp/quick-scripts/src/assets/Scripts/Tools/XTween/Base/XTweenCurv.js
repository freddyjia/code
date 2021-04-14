"use strict";
cc._RF.push(module, 'e63e0PCgFdOsYzlQgwgQgv0', 'XTweenCurv');
// Scripts/Tools/XTween/Base/XTweenCurv.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XTweenCurvType;
(function (XTweenCurvType) {
    XTweenCurvType[XTweenCurvType["Liner"] = 0] = "Liner";
    XTweenCurvType[XTweenCurvType["InSine"] = 1] = "InSine";
    XTweenCurvType[XTweenCurvType["OutSine"] = 2] = "OutSine";
    XTweenCurvType[XTweenCurvType["InOutSine"] = 3] = "InOutSine";
    XTweenCurvType[XTweenCurvType["InQuad"] = 4] = "InQuad";
    XTweenCurvType[XTweenCurvType["OutQuad"] = 5] = "OutQuad";
    XTweenCurvType[XTweenCurvType["InOutQuad"] = 6] = "InOutQuad";
    XTweenCurvType[XTweenCurvType["InCubic"] = 7] = "InCubic";
    XTweenCurvType[XTweenCurvType["OutCubic"] = 8] = "OutCubic";
    XTweenCurvType[XTweenCurvType["InOutCubic"] = 9] = "InOutCubic";
    XTweenCurvType[XTweenCurvType["InQuart"] = 10] = "InQuart";
    XTweenCurvType[XTweenCurvType["OutQuart"] = 11] = "OutQuart";
    XTweenCurvType[XTweenCurvType["InOutQuart"] = 12] = "InOutQuart";
    XTweenCurvType[XTweenCurvType["InQuint"] = 13] = "InQuint";
    XTweenCurvType[XTweenCurvType["OutQuint"] = 14] = "OutQuint";
    XTweenCurvType[XTweenCurvType["InOutQuint"] = 15] = "InOutQuint";
    XTweenCurvType[XTweenCurvType["InExpo"] = 16] = "InExpo";
    XTweenCurvType[XTweenCurvType["OutExpo"] = 17] = "OutExpo";
    XTweenCurvType[XTweenCurvType["InOutExpo"] = 18] = "InOutExpo";
    XTweenCurvType[XTweenCurvType["InCirc"] = 19] = "InCirc";
    XTweenCurvType[XTweenCurvType["OutCirc"] = 20] = "OutCirc";
    XTweenCurvType[XTweenCurvType["InOutCirc"] = 21] = "InOutCirc";
    XTweenCurvType[XTweenCurvType["InElastic"] = 22] = "InElastic";
    XTweenCurvType[XTweenCurvType["OutElastic"] = 23] = "OutElastic";
    XTweenCurvType[XTweenCurvType["InOutElastic"] = 24] = "InOutElastic";
    XTweenCurvType[XTweenCurvType["InBack"] = 25] = "InBack";
    XTweenCurvType[XTweenCurvType["OutBack"] = 26] = "OutBack";
    XTweenCurvType[XTweenCurvType["InOutBack"] = 27] = "InOutBack";
    XTweenCurvType[XTweenCurvType["InBounce"] = 28] = "InBounce";
    XTweenCurvType[XTweenCurvType["OutBounce"] = 29] = "OutBounce";
    XTweenCurvType[XTweenCurvType["InOutBounce"] = 30] = "InOutBounce";
    XTweenCurvType[XTweenCurvType["Flash"] = 31] = "Flash";
    XTweenCurvType[XTweenCurvType["InFlash"] = 32] = "InFlash";
    XTweenCurvType[XTweenCurvType["OutFlash"] = 33] = "OutFlash";
    XTweenCurvType[XTweenCurvType["InOutFlash"] = 34] = "InOutFlash";
    XTweenCurvType[XTweenCurvType["EaseIn"] = 35] = "EaseIn";
    XTweenCurvType[XTweenCurvType["EaseOut"] = 36] = "EaseOut";
    XTweenCurvType[XTweenCurvType["EaseInOut"] = 37] = "EaseInOut";
    XTweenCurvType[XTweenCurvType["BounceIn"] = 38] = "BounceIn";
    XTweenCurvType[XTweenCurvType["BounceOut"] = 39] = "BounceOut";
    XTweenCurvType[XTweenCurvType["BounceInOut"] = 40] = "BounceInOut";
    XTweenCurvType[XTweenCurvType["BuyuGold1"] = 41] = "BuyuGold1";
})(XTweenCurvType = exports.XTweenCurvType || (exports.XTweenCurvType = {}));
var XTweenCurv = /** @class */ (function () {
    function XTweenCurv() {
    }
    XTweenCurv.GetProgress = function (curvType, timeProgress, tCustomCurv) {
        if (tCustomCurv === void 0) { tCustomCurv = null; }
        var progress = 0;
        var pointsArray = tCustomCurv != null ? tCustomCurv : this.tEaseCurv[curvType];
        if (timeProgress <= 0) {
            progress = 0;
        }
        else if (timeProgress >= 1) {
            return pointsArray[pointsArray.length - 1];
        }
        else {
            var index = Math.floor(timeProgress * (pointsArray.length - 1));
            var indexProgress = (index) / (pointsArray.length - 1);
            var indexNextProgress = (index + 1) / (pointsArray.length - 1);
            var lerpProgress = (timeProgress - indexProgress) / (indexNextProgress - indexProgress);
            var delta = pointsArray[index + 1] - pointsArray[index];
            progress = pointsArray[index] + delta * lerpProgress;
        }
        return progress;
    };
    // public static Liner:number = 0;
    // public static InSine:number = 1;
    // public static OutSine:number = 2;
    // public static InOutSine:number = 3;
    // public static InQuad:number = 4;
    // public static OutQuad:number = 5;
    // public static InOutQuad:number = 6;
    // public static InCubic:number = 7;
    // public static OutCubic:number = 8;
    // public static InOutCubic:number = 9;
    // public static InQuart:number = 10;
    // public static OutQuart:number = 11;
    // public static InOutQuart:number = 12;
    // public static InQuint:number = 13;
    // public static OutQuint:number = 14;
    // public static InOutQuint:number = 15;
    // public static InExpo:number = 16;
    // public static OutExpo:number = 17;
    // public static InOutExpo:number = 18;
    // public static InCirc:number = 19;
    // public static OutCirc:number = 20;
    // public static InOutCirc:number = 21;
    // public static InElastic:number = 22;
    // public static OutElastic:number = 23;
    // public static InOutElastic:number = 24;
    // public static InBack:number = 25;
    // public static OutBack:number = 26;
    // public static InOutBack:number = 27;
    // public static InBounce:number = 28;
    // public static OutBounce:number = 29;
    // public static InOutBounce:number = 30;
    // public static Flash:number = 31;
    // public static InFlash:number = 32;
    // public static OutFlash:number = 33;
    // public static InOutFlash:number = 34;
    // public static EaseIn:number = 35;
    // public static EaseOut:number = 36;
    // public static EaseInOut:number = 37;
    // public static BounceIn:number = 38;
    // public static BounceOut:number = 39;
    // public static BounceInOut:number = 40;
    // public static BuyuGold1:number = 41;
    XTweenCurv.tEaseCurv = [
        //Liner
        [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2, 0.21, 0.22, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29, 0.3, 0.31, 0.32, 0.33, 0.34, 0.35, 0.36, 0.37, 0.38, 0.39, 0.4, 0.41, 0.42, 0.43, 0.44, 0.45, 0.46, 0.47, 0.48, 0.49, 0.5, 0.51, 0.52, 0.53, 0.54, 0.55, 0.56, 0.57, 0.58, 0.59, 0.6, 0.61, 0.62, 0.63, 0.64, 0.65, 0.66, 0.67, 0.68, 0.69, 0.7, 0.71, 0.72, 0.73, 0.74, 0.75, 0.76, 0.77, 0.78, 0.79, 0.8, 0.81, 0.82, 0.83, 0.84, 0.85, 0.86, 0.87, 0.88, 0.89, 0.9, 0.91, 0.92, 0.93, 0.94, 0.95, 0.96, 0.97, 0.98, 0.99, 1],
        //InSine
        [0, 0.0001, 0.0004, 0.0009, 0.0016, 0.0025, 0.0036, 0.0049, 0.0064, 0.008099999, 0.009999999, 0.0121, 0.0144, 0.0169, 0.0196, 0.0225, 0.0256, 0.0289, 0.0324, 0.0361, 0.04, 0.0441, 0.0484, 0.05289999, 0.0576, 0.0625, 0.0676, 0.07289999, 0.0784, 0.08409999, 0.08999999, 0.0961, 0.1024, 0.1089, 0.1156, 0.1225, 0.1296, 0.1369, 0.1444, 0.1521, 0.16, 0.1681, 0.1764, 0.1849, 0.1936, 0.2025, 0.2116, 0.2209, 0.2304, 0.2401, 0.25, 0.2601, 0.2704, 0.2809, 0.2916, 0.3025, 0.3136, 0.3249, 0.3364, 0.3481, 0.36, 0.3721, 0.3844, 0.3969, 0.4096, 0.4225, 0.4356, 0.4489, 0.4624, 0.4761, 0.49, 0.5041, 0.5184, 0.5328999, 0.5476, 0.5625, 0.5776, 0.5929, 0.6083999, 0.6240999, 0.6399999, 0.6561, 0.6724, 0.6889, 0.7056, 0.7225, 0.7395999, 0.7569, 0.7744, 0.7921, 0.8099999, 0.8281, 0.8463999, 0.8649, 0.8836, 0.9025, 0.9216, 0.9409, 0.9603999, 0.9800999, 1],
        //OutSine
        [0, 0.01988221, 0.03952986, 0.05894448, 0.07812759, 0.09708069, 0.1158053, 0.1343031, 0.1525754, 0.1706237, 0.1884498, 0.206055, 0.2234409, 0.2406089, 0.2575607, 0.2742978, 0.2908216, 0.3071337, 0.3232357, 0.339129, 0.3548151, 0.3702957, 0.3855722, 0.4006461, 0.415519, 0.4301924, 0.4446678, 0.4589467, 0.4730307, 0.4869213, 0.5006199, 0.5141283, 0.5274478, 0.54058, 0.5535264, 0.5662885, 0.5788679, 0.591266, 0.6034845, 0.6155247, 0.6273884, 0.6390768, 0.6505917, 0.6619345, 0.6731068, 0.68411, 0.6949458, 0.7056155, 0.7161208, 0.7264632, 0.7366441, 0.7466651, 0.7565279, 0.7662337, 0.7757843, 0.785181, 0.7944255, 0.8035193, 0.8124638, 0.8212607, 0.8299114, 0.8384174, 0.8467803, 0.8550015, 0.8630827, 0.8710254, 0.8788311, 0.8865011, 0.8940374, 0.901441, 0.9087139, 0.9158572, 0.9228727, 0.9297618, 0.9365262, 0.9431672, 0.9495122, 0.9553674, 0.9607521, 0.9656858, 0.9701883, 0.9742793, 0.9779785, 0.9813055, 0.9842801, 0.9869218, 0.9892505, 0.9912858, 0.9930473, 0.9945548, 0.9958279, 0.9968864, 0.9977498, 0.9984379, 0.9989705, 0.9993671, 0.9996474, 0.9998312, 0.9999381, 0.9999878, 1],
        //InOutSine
        [0, 0.000298, 0.001184, 0.002646, 0.004672, 0.007249999, 0.010368, 0.014014, 0.018176, 0.022842, 0.028, 0.033638, 0.039744, 0.046306, 0.053312, 0.06074999, 0.06860799, 0.076874, 0.085536, 0.09458199, 0.104, 0.113778, 0.123904, 0.134366, 0.145152, 0.15625, 0.167648, 0.179334, 0.191296, 0.203522, 0.216, 0.228718, 0.241664, 0.254826, 0.268192, 0.28175, 0.295488, 0.309394, 0.323456, 0.337662, 0.352, 0.366458, 0.381024, 0.395686, 0.410432, 0.42525, 0.4401279, 0.455054, 0.470016, 0.485002, 0.5, 0.514998, 0.5299839, 0.544946, 0.559872, 0.57475, 0.589568, 0.604314, 0.6189759, 0.6335419, 0.6479999, 0.662338, 0.676544, 0.690606, 0.704512, 0.71825, 0.7318079, 0.745174, 0.758336, 0.771282, 0.784, 0.7964779, 0.8087039, 0.820666, 0.832352, 0.84375, 0.854848, 0.865634, 0.876096, 0.886222, 0.896, 0.905418, 0.9144641, 0.923126, 0.931392, 0.93925, 0.946688, 0.953694, 0.960256, 0.9663621, 0.972, 0.977158, 0.981824, 0.985986, 0.9896321, 0.9927499, 0.995328, 0.997354, 0.9988161, 0.999702, 1],
        //InQuad
        [],
        //OutQuad
        [0, 0.0001, 0.0004, 0.0009, 0.0016, 0.0025, 0.0036, 0.0049, 0.0064, 0.008099999, 0.009999999, 0.0121, 0.0144, 0.0169, 0.0196, 0.0225, 0.0256, 0.0289, 0.0324, 0.0361, 0.04, 0.0441, 0.0484, 0.05289999, 0.0576, 0.0625, 0.0676, 0.07289999, 0.0784, 0.08409999, 0.08999999, 0.0961, 0.1024, 0.1089, 0.1156, 0.1225, 0.1296, 0.1369, 0.1444, 0.1521, 0.16, 0.1681, 0.1764, 0.1849, 0.1936, 0.2025, 0.2116, 0.2209, 0.2304, 0.2401, 0.25, 0.2601, 0.2704, 0.2809, 0.2916, 0.3025, 0.3136, 0.3249, 0.3364, 0.3481, 0.36, 0.3721, 0.3844, 0.3969, 0.4096, 0.4225, 0.4356, 0.4489, 0.4624, 0.4761, 0.49, 0.5041, 0.5184, 0.5328999, 0.5476, 0.5625, 0.5776, 0.5929, 0.6083999, 0.6240999, 0.6399999, 0.6561, 0.6724, 0.6889, 0.7056, 0.7225, 0.7395999, 0.7569, 0.7744, 0.7921, 0.8099999, 0.8281, 0.8463999, 0.8649, 0.8836, 0.9025, 0.9216, 0.9409, 0.9603999, 0.9800999, 1],
        //InOutQuad
        [],
        //InCubic
        [],
        //OutCubic
        [0, 0.02064649, 0.0425151, 0.06549954, 0.08949351, 0.1143907, 0.1400849, 0.1664697, 0.1934389, 0.2208861, 0.2487052, 0.2767897, 0.3050334, 0.33333, 0.3615732, 0.3896567, 0.4174743, 0.4449196, 0.4718862, 0.4982682, 0.5239589, 0.5488521, 0.5728416, 0.5958211, 0.6176843, 0.6383249, 0.6576365, 0.675513, 0.691848, 0.7065352, 0.7194682, 0.7312319, 0.7426595, 0.7537585, 0.7645338, 0.77499, 0.785132, 0.7949646, 0.8044926, 0.8137208, 0.8226539, 0.8312969, 0.8396543, 0.8477311, 0.8555321, 0.863062, 0.8703256, 0.8773277, 0.8840731, 0.8905666, 0.8968132, 0.9028172, 0.9085839, 0.9141177, 0.9194237, 0.9245065, 0.929371, 0.9340219, 0.938464, 0.9427022, 0.9467412, 0.9505858, 0.9542409, 0.9577112, 0.9610014, 0.9641165, 0.967061, 0.96984, 0.9724582, 0.9749203, 0.9772312, 0.9793956, 0.9814184, 0.9833043, 0.9850581, 0.9866846, 0.9881886, 0.989575, 0.9908484, 0.9920137, 0.9930757, 0.9940392, 0.994909, 0.9956897, 0.9963864, 0.9970038, 0.9975466, 0.9980195, 0.9984275, 0.9987754, 0.9990678, 0.9993095, 0.9995056, 0.9996606, 0.9997794, 0.9998667, 0.9999275, 0.9999664, 0.9999883, 0.9999979, 1],
        //InOutCubic
        [],
        //InQuart
        [],
        //OutQuart
        [0, 0.02149474, 0.04580051, 0.07264963, 0.1017744, 0.1329072, 0.1657803, 0.2001261, 0.2356769, 0.2721649, 0.3093225, 0.3468822, 0.384576, 0.4221365, 0.4592959, 0.4957865, 0.5313407, 0.5656908, 0.598569, 0.6297079, 0.6588395, 0.6856964, 0.7100108, 0.7315149, 0.7499413, 0.7650221, 0.7766964, 0.7873044, 0.7975798, 0.8075278, 0.8171535, 0.8264623, 0.8354591, 0.8441493, 0.852538, 0.8606305, 0.8684319, 0.8759475, 0.8831823, 0.8901417, 0.8968308, 0.9032547, 0.9094189, 0.9153283, 0.9209881, 0.9264036, 0.9315801, 0.9365226, 0.9412364, 0.9457266, 0.9499984, 0.9540572, 0.9579079, 0.961556, 0.9650064, 0.9682645, 0.9713354, 0.9742242, 0.9769363, 0.9794769, 0.981851, 0.9840639, 0.9861208, 0.9880269, 0.9897873, 0.9914074, 0.9928921, 0.9942469, 0.9954768, 0.9965871, 0.9975829, 0.9984695, 0.999252, 0.9999355, 1.000525, 1.001027, 1.001445, 1.001785, 1.002052, 1.002252, 1.002389, 1.002468, 1.002496, 1.002476, 1.002415, 1.002318, 1.002189, 1.002033, 1.001857, 1.001665, 1.001463, 1.001255, 1.001047, 1.000844, 1.000651, 1.000474, 1.000317, 1.000186, 1.000086, 1.000022, 1],
        //InOutQuart
        [],
        //InQuint
        [],
        //OutQuint
        [],
        //InOutQuint
        [],
        //InExpo
        [],
        //OutExpo
        [],
        //InOutExpo
        [],
        //InCirc
        [],
        //OutCirc
        [0, 0.05500164, 0.1049521, 0.1502692, 0.191371, 0.2286754, 0.2626002, 0.2935635, 0.3219831, 0.3482771, 0.3728631, 0.3961594, 0.4185836, 0.4334989, 0.4480481, 0.4623261, 0.4763362, 0.490081, 0.5035637, 0.5167872, 0.5297545, 0.5424686, 0.5549324, 0.5671488, 0.579121, 0.5908517, 0.602344, 0.613601, 0.6246254, 0.6354204, 0.6459888, 0.6563337, 0.6664581, 0.6763648, 0.6860569, 0.6955372, 0.704809, 0.7138748, 0.722738, 0.7314014, 0.739868, 0.7481408, 0.7562226, 0.7641165, 0.7718256, 0.7793525, 0.7867005, 0.7938726, 0.8008715, 0.8077003, 0.814362, 0.8208596, 0.8271959, 0.8333741, 0.839397, 0.8452677, 0.850989, 0.856564, 0.8619956, 0.8672869, 0.8724406, 0.8774601, 0.8823479, 0.8871073, 0.8917412, 0.8962524, 0.900644, 0.904919, 0.9090803, 0.913131, 0.917074, 0.9209121, 0.9246485, 0.928286, 0.9318277, 0.9352766, 0.9386355, 0.9419075, 0.9450955, 0.9482026, 0.9512315, 0.9541855, 0.9570674, 0.9598802, 0.9626268, 0.9653102, 0.9679334, 0.9704994, 0.9730111, 0.9754715, 0.9778836, 0.9802504, 0.9825747, 0.9848596, 0.9871081, 0.9893231, 0.9915076, 0.9936646, 0.995797, 0.9979078, 1],
        //InOutCirc
        [],
        //InElastic
        [],
        //OutElastic
        [],
        //InOutElastic
        [],
        //InBack
        [0, -0.0001529895, -0.0006022027, -0.001333007, -0.002330769, -0.003580855, -0.005068634, -0.006779472, -0.008698735, -0.01081179, -0.01310401, -0.01556075, -0.01816739, -0.02090929, -0.02377182, -0.02674034, -0.02980023, -0.03293685, -0.03613556, -0.03938174, -0.04266074, -0.04595795, -0.04925872, -0.05254842, -0.05581242, -0.05903609, -0.06220479, -0.06530388, -0.06831876, -0.07123476, -0.07403725, -0.07671164, -0.07924324, -0.08161745, -0.08381964, -0.08583514, -0.08764937, -0.08924766, -0.09061539, -0.09173793, -0.09260062, -0.09318887, -0.09348802, -0.09348344, -0.0931605, -0.09250457, -0.09150103, -0.09013521, -0.0883925, -0.08625828, -0.08371788, -0.08075672, -0.07736012, -0.07351347, -0.0692021, -0.06441142, -0.05912681, -0.05333361, -0.04701715, -0.04016288, -0.03275612, -0.02478221, -0.01622657, -0.007074509, 0.0030484, 0.01532971, 0.02976238, 0.04623429, 0.06463344, 0.08484749, 0.1067644, 0.1302721, 0.1552585, 0.1816113, 0.2092188, 0.2379684, 0.2677481, 0.2984459, 0.3299495, 0.362147, 0.3949262, 0.4281752, 0.4617813, 0.4956329, 0.5296176, 0.5636234, 0.5975382, 0.6312501, 0.6646463, 0.6976153, 0.7300448, 0.7618225, 0.7928367, 0.822975, 0.8521252, 0.8801752, 0.9070131, 0.9325265, 0.9566036, 0.979132, 1],
        //OutBack
        [0, 0.05661624, 0.1111583, 0.163666, 0.2141789, 0.2627367, 0.3093793, 0.3541462, 0.3970772, 0.438212, 0.4775904, 0.5152519, 0.5512365, 0.5855836, 0.618333, 0.6495244, 0.6791977, 0.7073924, 0.7341482, 0.759505, 0.7835023, 0.8061799, 0.8275776, 0.8477349, 0.8666916, 0.8844875, 0.9011621, 0.9167554, 0.931307, 0.9448564, 0.9574435, 0.9691079, 0.9798895, 0.9898278, 0.9989626, 1.007334, 1.014981, 1.021943, 1.028261, 1.033974, 1.039121, 1.043744, 1.04788, 1.05157, 1.054854, 1.05777, 1.06036, 1.062663, 1.064718, 1.066565, 1.068244, 1.069724, 1.070945, 1.071914, 1.072642, 1.073137, 1.073408, 1.073465, 1.073315, 1.072968, 1.072434, 1.07172, 1.070837, 1.069792, 1.068596, 1.067256, 1.065782, 1.064184, 1.062469, 1.060646, 1.058726, 1.056717, 1.054627, 1.052466, 1.050243, 1.047966, 1.045645, 1.043289, 1.040907, 1.038507, 1.036099, 1.033691, 1.031293, 1.028914, 1.026562, 1.024246, 1.021976, 1.019761, 1.017609, 1.015529, 1.013531, 1.011623, 1.009814, 1.008114, 1.006531, 1.005075, 1.003753, 1.002576, 1.001552, 1.00069, 1],
        //InOutBack
        [],
        //InBounce
        [],
        //OutBounce
        [0, 0.01199454, 0.02780658, 0.04717878, 0.06985379, 0.09557425, 0.1240828, 0.1551222, 0.1884349, 0.2237637, 0.2608512, 0.2994401, 0.3392731, 0.3800926, 0.4216415, 0.4636623, 0.5058978, 0.5480905, 0.5899832, 0.6313184, 0.6718389, 0.7112871, 0.749406, 0.785938, 0.8206259, 0.8532122, 0.8834395, 0.9110507, 0.9357885, 0.9573952, 0.9756135, 0.9901863, 0.9737608, 0.949819, 0.9268978, 0.9050645, 0.8843856, 0.8649281, 0.8467589, 0.8299447, 0.8145524, 0.8006489, 0.7883011, 0.7775756, 0.7685395, 0.7612596, 0.7558026, 0.7522354, 0.750625, 0.7510381, 0.7535416, 0.7582023, 0.7650871, 0.7742628, 0.7857963, 0.7997544, 0.816204, 0.8352119, 0.856845, 0.88117, 0.9082537, 0.9381636, 0.9709656, 0.9898012, 0.9731528, 0.9587908, 0.9466213, 0.9365504, 0.9284843, 0.9223291, 0.917991, 0.9153761, 0.9143907, 0.9149407, 0.9169325, 0.920272, 0.9248656, 0.9306193, 0.9374393, 0.9452317, 0.9539027, 0.9633585, 0.9735051, 0.9842488, 0.9954956, 1.00421, 0.9955658, 0.9879528, 0.981409, 0.9759721, 0.9716797, 0.9685695, 0.9666793, 0.9660468, 0.9667096, 0.9687054, 0.9720719, 0.9768471, 0.9830682, 0.9907733, 1],
        //InOutBounce
        [],
        //Flash
        [],
        //InFlash
        [],
        //OutFlash
        [],
        //InOutFlash
        [],
        //EaseIn
        [0, 0.0004129765, 0.001013371, 0.001801376, 0.002777183, 0.003940982, 0.005292966, 0.006833327, 0.008562256, 0.01047994, 0.01258658, 0.01488237, 0.01736748, 0.02004212, 0.02290649, 0.02596075, 0.02920512, 0.03263979, 0.03626493, 0.04008075, 0.04408744, 0.04828519, 0.05267419, 0.05725463, 0.06202671, 0.0669906, 0.07214651, 0.07749463, 0.08303516, 0.08876827, 0.09469417, 0.1008131, 0.1071251, 0.1136305, 0.1203294, 0.1272221, 0.1343087, 0.1415895, 0.1490645, 0.1567341, 0.1645984, 0.1726575, 0.1809118, 0.1893613, 0.1980063, 0.2068469, 0.2158834, 0.2251159, 0.2345447, 0.2441698, 0.2539917, 0.2640103, 0.2742258, 0.2846386, 0.2952488, 0.3060566, 0.3170621, 0.3282655, 0.3396671, 0.3512671, 0.3630656, 0.3750628, 0.3872589, 0.3996542, 0.4122487, 0.4250427, 0.4380364, 0.4512299, 0.4646236, 0.4782175, 0.4920118, 0.5060068, 0.5202026, 0.5345994, 0.5491975, 0.5639969, 0.5789979, 0.5942007, 0.6096056, 0.6252126, 0.6410218, 0.6570339, 0.6732484, 0.689666, 0.7062867, 0.7231107, 0.7401382, 0.7573696, 0.7748047, 0.7924439, 0.8102874, 0.8283354, 0.846588, 0.8650456, 0.8837081, 0.9025759, 0.921649, 0.9409279, 0.9604125, 0.9801031, 1],
        //EaseOut
        [0, 0.0199, 0.0396, 0.0591, 0.0784, 0.0975, 0.1164, 0.1351, 0.1536, 0.1719, 0.19, 0.2079, 0.2256, 0.2431, 0.2604, 0.2775, 0.2944, 0.3111, 0.3276, 0.3439, 0.36, 0.3759, 0.3916, 0.4071, 0.4224, 0.4375, 0.4524, 0.4671, 0.4816, 0.4959, 0.51, 0.5239, 0.5376, 0.5511, 0.5644, 0.5775, 0.5904, 0.6031, 0.6156, 0.6279, 0.64, 0.6519, 0.6636, 0.6751, 0.6864, 0.6974999, 0.7084, 0.7191, 0.7296, 0.7399, 0.75, 0.7599, 0.7696, 0.7791, 0.7884, 0.7975, 0.8064001, 0.8151, 0.8236, 0.8319, 0.84, 0.8479, 0.8556, 0.8631, 0.8704, 0.8775, 0.8844, 0.8911, 0.8975999, 0.9039, 0.91, 0.9158999, 0.9215999, 0.9270999, 0.9324, 0.9375, 0.9424, 0.9471, 0.9516, 0.9559, 0.96, 0.9639, 0.9676, 0.9711, 0.9744, 0.9775, 0.9804, 0.9831, 0.9856, 0.9879, 0.99, 0.9919, 0.9936, 0.9951, 0.9963999, 0.9974999, 0.9983999, 0.9991, 0.9995999, 0.9998999, 1],
        //EaseInOut
        [0, 0.000298, 0.001184, 0.002646, 0.004672, 0.007249999, 0.010368, 0.014014, 0.018176, 0.022842, 0.028, 0.033638, 0.039744, 0.046306, 0.053312, 0.06074999, 0.06860799, 0.076874, 0.085536, 0.09458199, 0.104, 0.113778, 0.123904, 0.134366, 0.145152, 0.15625, 0.167648, 0.179334, 0.191296, 0.203522, 0.216, 0.228718, 0.241664, 0.254826, 0.268192, 0.28175, 0.295488, 0.309394, 0.323456, 0.337662, 0.352, 0.366458, 0.381024, 0.395686, 0.410432, 0.42525, 0.4401279, 0.455054, 0.470016, 0.485002, 0.5, 0.514998, 0.5299839, 0.544946, 0.559872, 0.57475, 0.589568, 0.604314, 0.6189759, 0.6335419, 0.6479999, 0.662338, 0.676544, 0.690606, 0.704512, 0.71825, 0.7318079, 0.745174, 0.758336, 0.771282, 0.784, 0.7964779, 0.8087039, 0.820666, 0.832352, 0.84375, 0.854848, 0.865634, 0.876096, 0.886222, 0.896, 0.905418, 0.9144641, 0.923126, 0.931392, 0.93925, 0.946688, 0.953694, 0.960256, 0.9663621, 0.972, 0.977158, 0.981824, 0.985986, 0.9896321, 0.9927499, 0.995328, 0.997354, 0.9988161, 0.999702, 1],
        //BounceIn
        [0, -0.01632952, -0.03179857, -0.04641721, -0.0601955, -0.0731435, -0.08527126, -0.09658885, -0.1071063, -0.1168337, -0.1257811, -0.1339586, -0.1413762, -0.1480439, -0.1539719, -0.1591701, -0.1636487, -0.1674177, -0.1704872, -0.1728671, -0.1745677, -0.1755989, -0.1759708, -0.1756934, -0.1747768, -0.1732311, -0.1710663, -0.1682925, -0.1649198, -0.1609581, -0.1564176, -0.1513083, -0.1456403, -0.1394235, -0.1326682, -0.1253843, -0.117582, -0.1092711, -0.1004619, -0.0911644, -0.08138866, -0.0711446, -0.06044247, -0.04929222, -0.03770392, -0.02568768, -0.01325349, -0.0004114163, 0.01282843, 0.02645598, 0.0404613, 0.05483422, 0.06956473, 0.08464272, 0.1000581, 0.1158011, 0.1318613, 0.1482288, 0.1648934, 0.1818454, 0.1990744, 0.2165705, 0.2343235, 0.2523234, 0.2705603, 0.289024, 0.3077043, 0.3265914, 0.3456753, 0.3649457, 0.3843926, 0.4040061, 0.4237758, 0.4436919, 0.4637446, 0.4839233, 0.504218, 0.5246191, 0.5451163, 0.5656992, 0.5863582, 0.6070833, 0.6278641, 0.6486908, 0.6695528, 0.6904408, 0.7113444, 0.7322536, 0.7531583, 0.7740482, 0.7949134, 0.8157441, 0.8365301, 0.8572615, 0.8779277, 0.8985191, 0.9190258, 0.939437, 0.9597432, 0.9799345, 1],
        //BounceOut
        [0, 0.01019431, 0.0207694, 0.03171348, 0.04301479, 0.05466154, 0.06664196, 0.07894427, 0.0915567, 0.1044675, 0.1176648, 0.1311369, 0.144872, 0.1588584, 0.1730842, 0.1875377, 0.2022071, 0.2170806, 0.2321465, 0.2473929, 0.2628081, 0.2783804, 0.2940979, 0.3099489, 0.3259215, 0.3420042, 0.3581848, 0.3744519, 0.3907936, 0.4071981, 0.4236535, 0.4401483, 0.4566705, 0.4732085, 0.4897504, 0.5062844, 0.5227987, 0.5392817, 0.5557215, 0.5721064, 0.5884244, 0.6046641, 0.6208134, 0.6368606, 0.652794, 0.6686019, 0.6842722, 0.6997935, 0.7151538, 0.7303413, 0.7453444, 0.7601511, 0.7747499, 0.7891287, 0.8032761, 0.81718, 0.8308288, 0.8442106, 0.8573137, 0.8701263, 0.8826367, 0.8948331, 0.9067035, 0.9182365, 0.92942, 0.9402424, 0.9506919, 0.9607566, 0.9704249, 0.9796849, 0.988525, 0.9969332, 1.004898, 1.012407, 1.019449, 1.026012, 1.032085, 1.037655, 1.042711, 1.047241, 1.051233, 1.054675, 1.057556, 1.059864, 1.061587, 1.062714, 1.063231, 1.063129, 1.062395, 1.061017, 1.058983, 1.056282, 1.052902, 1.048831, 1.044057, 1.038569, 1.032355, 1.025403, 1.017701, 1.009237, 1],
        //BounceInOut
        [0, -0.01990709, -0.03804972, -0.05446344, -0.06918374, -0.08224615, -0.0936862, -0.1035394, -0.1118412, -0.1186273, -0.123933, -0.127794, -0.1302456, -0.1313236, -0.1310633, -0.1295003, -0.1266701, -0.1226083, -0.1173503, -0.1109316, -0.1033879, -0.0947545, -0.08506703, -0.07436106, -0.062672, -0.05003542, -0.03648681, -0.02206179, -0.006795683, 0.009275801, 0.0261172, 0.04369316, 0.06196785, 0.08090597, 0.100472, 0.1206303, 0.1413455, 0.162582, 0.1843042, 0.2064767, 0.229064, 0.2520306, 0.2753407, 0.2989593, 0.3228503, 0.3469786, 0.3713086, 0.3958046, 0.4204313, 0.4451529, 0.4699343, 0.4947397, 0.5195336, 0.5442805, 0.5689449, 0.5934914, 0.6178842, 0.6420881, 0.6660672, 0.6897861, 0.7132099, 0.7363023, 0.7590281, 0.7813517, 0.8032374, 0.8246502, 0.845554, 0.8659139, 0.885694, 0.9048587, 0.9233726, 0.9412, 0.9583058, 0.9746542, 0.9902101, 1.004937, 1.0188, 1.031764, 1.043793, 1.054851, 1.064904, 1.073915, 1.081849, 1.08867, 1.094344, 1.098834, 1.102104, 1.10412, 1.104846, 1.104247, 1.102286, 1.098929, 1.094139, 1.087881, 1.080121, 1.070822, 1.059948, 1.047465, 1.033336, 1.017527, 1],
        //BuyuGold1
        [0, 0.0007591778, 0.01331668, 0.03578163, 0.06578314, 0.1024687, 0.1449858, 0.1924818, 0.2441043, 0.2990007, 0.3563185, 0.4152052, 0.4748082, 0.534275, 0.5927531, 0.6493899, 0.7033329, 0.7537296, 0.7997275, 0.8404741, 0.8751166, 0.9028028, 0.9232153, 0.9375508, 0.9464056, 0.9503277, 0.9498648, 0.9455649, 0.9379756, 0.9276451, 0.915121, 0.894859, 0.8612478, 0.8161423, 0.7614063, 0.6989037, 0.6304983, 0.5580535, 0.4834335, 0.408502, 0.3351226, 0.265159, 0.2004753, 0.142935, 0.0944019, 0.05673993, 0.03181273, 0.02148414, 0.02450721, 0.03520183, 0.05253629, 0.07561658, 0.1035489, 0.1354394, 0.1703941, 0.2075195, 0.2459211, 0.2847054, 0.3229785, 0.3598465, 0.3944156, 0.4257919, 0.4530814, 0.4753903, 0.4918247, 0.5014908, 0.5034947, 0.4934821, 0.4663568, 0.4253525, 0.3738844, 0.3153675, 0.2532169, 0.190848, 0.1316754, 0.07911509, 0.03658184, 0.007490873, 0.004742682, 0.003296256, 0.02357885, 0.04532585, 0.06796149, 0.09091046, 0.1135973, 0.1354466, 0.1558828, 0.1743306, 0.1902144, 0.2029588, 0.2119884, 0.2167276, 0.2166011, 0.2110333, 0.1994489, 0.1812724, 0.1559282, 0.1228411, 0.08143555, 0.03113598, 0],
    ];
    return XTweenCurv;
}());
exports.XTweenCurv = XTweenCurv;

cc._RF.pop();