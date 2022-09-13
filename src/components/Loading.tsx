import { motion } from 'framer-motion';


export function Loading() {

    const drawNew = {
        hidden: { strokeDasharray: "18773.291015625px", strokeDashoffset: "18773.291015625px", fill: "transparent" },
        visible: {
            strokeDashoffset: 0, fill: "white",
            transition: {
                strokeDashoffset: { duration: 1.6, ease: "easeOut" }, fill: { duration: 0.7, ease: "easeIn", delay: 1.3 }
            }
        }
    }

    return (

        <motion.svg viewBox="0 0 1280 1942.6667" initial="hidden" whileInView="visible" className="logo2" height="1942.6667" width="1280" version="1.1">
            <motion.defs />
            <motion.g>
                <motion.path
                    fill={"transparent"}
                    stroke="#fff"
                    className={"logo-elem-1"}
                    d="m 1105.3327,1603.8304 -4.332,0.418 -4.334,0.418 -0.3496,49.6679 -0.3496,49.6661 h 4.6836 4.6816 v -50.084 z m -570.6953,0.17 c -20.6727,0 -33.31083,10.227 -33.29883,26.9472 0.0105,14.816 6.95114,20.4528 33.88281,27.5137 16.50512,4.3274 20.33939,5.8178 23.76562,9.2441 3.28269,3.2826 4.11213,5.2656 4.2168,10.0918 0.16252,7.4894 -3.16132,12.3884 -11.28125,16.6289 -8.26519,4.3164 -25.67738,3.7363 -34.61328,-1.1543 -5.30624,-2.904 -9.85405,-8.9038 -12.29102,-16.2148 -0.79872,-2.3962 -7.68554,0.4302 -7.68554,3.1543 0,8.9587 11.00754,19.9084 24,23.875 5.61755,1.7149 24.55864,1.3523 31.02539,-0.5938 3.36344,-1.0123 7.97247,-3.161 10.24219,-4.7773 11.3376,-8.0731 13.11015,-28.8546 3.20312,-37.5566 -4.45109,-3.9096 -10.2332,-6.1523 -27.13672,-10.5215 -18.90515,-4.8865 -23.10225,-6.6928 -26.07031,-11.2227 -2.97251,-4.5366 -2.8093,-13.5811 0.32227,-17.8828 3.71317,-5.1009 13.18865,-9.5364 20.36328,-9.5234 13.52255,0.016 22.86485,4.97 27,14.3183 2.36884,5.3552 2.94271,5.8237 6.16211,5.0157 4.82721,-1.2116 4.86073,-1.2878 3.09961,-7.1661 -3.44122,-11.4853 -18.47498,-20.1757 -34.90625,-20.1757 z m -325.30469,1.3339 v 49.3321 49.334 h 33.42187 33.42188 l -0.42188,-3.6661 -0.42187,-3.6679 -28.33203,-0.3594 -28.33399,-0.3594 v -19.3066 -19.3067 h 26.66602 26.66797 v -4 -4 h -26.66797 -26.66602 v -17.9746 -17.9726 l 28.33399,-0.3613 28.33203,-0.3594 0.42187,-3.666 0.42188,-3.6661 h -33.42188 z m 138.44726,0 0.50586,37 c 0.35085,25.7089 1.01666,38.2206 2.1836,41 4.3432,10.3444 12.22781,17.5522 22.63281,20.6934 5.85386,1.7672 22.02803,1.4398 28.74609,-0.582 9.13922,-2.7506 15.28299,-8.0438 19.3125,-16.6367 3.48336,-7.4287 3.50804,-7.7093 3.91602,-44.4747 l 0.41015,-37 h -4.74218 -4.74414 l -0.0293,35.6661 c -0.0326,39.6927 -0.60332,42.8071 -9.15625,50.0039 -10.417,8.7655 -30.54545,8.5018 -40.83789,-0.5352 -7.66295,-6.7281 -8.64453,-12.5625 -8.64453,-51.3769 v -33.7579 h -4.77539 z m 452.22071,0 v 49.3321 49.334 h 33.42187 33.42188 l -0.42188,-3.6661 -0.42187,-3.6679 -28.33399,-0.3594 -28.33398,-0.3594 v -19.3066 -19.3067 h 26.66797 26.66601 v -4 -4 h -26.66601 -26.66797 v -17.9746 -17.9726 l 28.33398,-0.3613 28.33399,-0.3594 0.42187,-3.666 0.42188,-3.6661 h -33.42188 z m 377.15622,0 0.4219,3.6661 0.4219,3.666 17,0.373 17,0.3731 v 45.2949 45.293 h 4.666 4.666 v -45.334 -45.3321 h 17.334 17.334 v -4 -4 h -39.4219 z m -1123.156224,0.6661 -0.349609,49 -0.351562,49 h 22.441406 c 25.484029,0 32.686079,-1.4475 41.867189,-8.4121 6.74346,-5.1158 13.67621,-14.9304 16.04101,-22.711 2.51461,-8.2733 2.13676,-29.4989 -0.66796,-37.543 -3.83373,-10.995 -11.1314,-19.3463 -21.5586,-24.6679 l -9.14453,-4.666 H 78.139348 Z m 590.666014,0 -0.34961,49 -0.34961,49 h 22.44141 c 25.48403,0 32.68413,-1.4475 41.86523,-8.4121 6.74351,-5.1158 13.67618,-14.9304 16.04102,-22.711 2.51462,-8.2733 2.13679,-29.4989 -0.66797,-37.543 -3.83372,-10.995 -11.13137,-19.3463 -21.55859,-24.6679 l -9.14453,-4.666 h -24.13868 z m 296,0 -0.34961,49 -0.34961,49 h 22.44141 c 25.48403,0 32.68415,-1.4475 41.86522,-8.4121 6.7435,-5.1158 13.6762,-14.9304 16.041,-22.711 2.5146,-8.2733 2.1368,-29.4989 -0.6679,-37.543 -3.8338,-10.995 -11.1314,-19.3463 -21.55863,-24.6679 l -9.14453,-4.666 h -24.13868 z m -877.999998,7.3339 h 15.787109 c 28.571439,0 40.340909,6.9369 46.249999,27.2637 6.78288,23.3324 -4.06577,48.7298 -23.07031,54.0078 v -0.01 c -2.731469,0.7586 -12.616834,1.3867 -21.966798,1.3867 l -17,0.014 v -41.334 z m 590.666018,0 h 15.78906 c 28.57144,0 40.33892,6.9369 46.24805,27.2637 6.78287,23.3324 -4.06573,48.7298 -23.07032,54.0078 v -0.01 c -2.73144,0.7586 -12.61683,1.3867 -21.96679,1.3867 l -17,0.014 v -41.334 z m 296,0 h 15.78906 c 28.57144,0 40.33883,6.9369 46.24803,27.2637 6.7829,23.3324 -4.0657,48.7298 -23.0703,54.0078 v -0.01 c -2.73144,0.7586 -12.61683,1.3867 -21.96679,1.3867 l -17,0.014 v -41.334 z m -436,171.8301 -4.33203,0.418 -4.33399,0.418 -0.34961,49.666 -0.34961,49.6679 h 4.6836 4.68164 v -50.0859 z m 250.89453,0.4356 -4.61914,0.4004 -20.45899,48.666 c -11.25298,26.7663 -20.46765,49.1179 -20.47265,49.6679 -0.006,0.55 1.94089,0.9985 4.32422,0.9981 4.22293,-8e-4 4.46447,-0.3236 9.50586,-12.6934 l 5.17382,-12.6933 26.82618,0.3613 26.82617,0.3594 5.22656,12.334 c 5.10223,12.0399 5.33319,12.3339 9.66797,12.3339 2.44216,0 4.43945,-0.3299 4.43945,-0.7324 0,-0.6572 -36.89961,-88.5986 -40.38672,-96.2519 -1.1696,-2.567 -2.28604,-3.0756 -6.05273,-2.75 z m 115.77344,0.873 v 49.4297 49.4297 h 4.66601 4.66602 v -23.332 -23.334 l 10.33398,0.053 10.33399,0.053 18,23.2676 c 17.70988,22.8914 18.08131,23.2663 23.07812,23.2793 3.69835,0.01 4.81223,-0.4406 4.09961,-1.6543 -0.53822,-0.9167 -8.37376,-11.0657 -17.41211,-22.5527 -9.03836,-11.4869 -16.43359,-21.1513 -16.43359,-21.4785 0,-0.327 3.3286,-0.9395 7.39648,-1.3594 15.54796,-1.6046 24.60352,-11.0305 24.60352,-25.6094 0,-10.1941 -3.60386,-16.8714 -11.66406,-21.6094 -6.30532,-3.7061 -6.46759,-3.7263 -34.00196,-4.1542 z m -281.33399,0.025 -4.33398,0.418 -4.33203,0.4179 -0.34961,49 -0.35157,49 h 31.35157 31.34961 v -4 -4 h -26.66797 -26.66602 v -45.4179 z m -163.01172,0.166 -4.82812,0.02 -4.82617,0.02 -16.66797,43.8574 c -14.42317,37.954 -16.8628,43.471 -18.13281,40.9824 -0.80719,-1.5818 -8.55998,-21.3269 -17.22852,-43.8769 l -15.76172,-41 h -4.4375 c -2.44091,0 -4.43945,0.4066 -4.43945,0.9043 0,0.4978 8.52787,22.7262 18.94922,49.3965 l 18.94726,48.4902 5.14844,-0.3965 5.14844,-0.3965 19.06445,-49 z m 453.67774,8.002 h 20.04297 c 22.01977,0 26.82755,1.1134 31.73437,7.3515 2.15158,2.7353 2.89063,5.5084 2.89063,10.8477 0,6.2494 -0.55878,7.7737 -4.33399,11.8281 -3.34258,3.5897 -5.97568,4.9571 -11.51562,5.9805 -3.9501,0.7296 -14.30014,1.3262 -23,1.3262 h -15.81836 v -18.6661 z m -125.39063,3.5957 c 0.55104,-0.5894 3.4456,4.8106 6.4336,12 2.98798,7.1895 8.14015,19.521 11.44726,27.4043 l 6.01172,14.334 h -23.39258 c -18.19357,0 -23.24133,-0.3699 -22.70508,-1.6661 14.20871,-34.3416 21.40499,-51.2163 22.20508,-52.0722 z"
                    variants={drawNew}
                    />
                <motion.path
                    fill={"transparent"}
                    stroke="#fff"
                    className={"logo-elem-2"}
                    d="m 959.12372,83.777704 -9.48047,37.777346 c -5.21468,20.7776 -14.94595,60.87808 -21.625,89.11133 -6.679,28.23321 -12.45654,52.38267 -12.83789,53.66601 -0.65832,2.21533 -20.60553,2.33399 -394.60351,2.33399 H 126.66669 v 474.66601 474.66801 h 218.66602 c 120.26619,0 218.66797,0.2562 218.66797,0.5703 0,1.7807 31.24116,130.4177 34.50976,142.0957 2.1552,7.7 4.59081,16.5382 5.41406,19.6406 l 1.49805,5.6406 28.95508,0.3867 c 90.88685,1.2136 102.95508,1.0917 102.95508,-1.0507 0,-1.1279 1.77449,-9.3786 3.94336,-18.334 10.29481,-42.5087 32.05664,-135.3353 32.05664,-136.7403 0,-1.1914 -10.70284,-1.4938 -43.59961,-1.2285 l -43.59766,0.3535 -7.48047,31.3321 c -4.11333,17.2333 -7.76485,32.1497 -8.11523,33.1465 -0.35039,0.9968 -4.75368,-15.8038 -9.78516,-37.334 -5.03142,-21.5301 -14.11538,-59.8446 -20.1875,-85.1446 C 634.495,1144.0347 588.56414,951.28286 538.50068,741.00036 L 447.47724,358.66638 h -43.88281 -43.88282 l 0.73047,3 c 0.40248,1.64996 41.59964,174.90084 91.54883,385 49.94919,210.09916 91.12685,383.05072 91.50391,384.33402 0.65041,2.2138 -8.17062,2.3339 -172.07227,2.3339 H 198.66669 V 740.66638 348.00036 h 348 c 277.51948,0 347.99662,0.3369 347.98242,1.66602 -0.01,0.91667 -41.29175,175.0675 -91.73632,387 l -91.7168,385.33402 43.27148,0.3515 c 23.79988,0.1935 43.59108,0.034 43.98047,-0.3554 0.38939,-0.3894 40.77721,-169.14961 89.74805,-375.01958 48.97085,-205.86995 94.43229,-396.81066 101.02539,-424.31054 18.66252,-77.84109 42.55192,-178.91249 43.33402,-183.33399 0.3891,-2.2 3.2241,-14.94857 6.3007,-28.33008 3.0767,-13.381478 5.3426,-24.554377 5.0352,-24.830075 -0.3073,-0.275693 -19.5044,-0.926825 -42.6621,-1.447265 z m -578.42578,0.0039 -42.01562,0.945313 c -23.10855,0.519304 -42.18213,1.084872 -42.38672,1.257812 -0.53822,0.454984 5.78635,28.472891 23.40625,103.681641 l 15.54101,66.33398 h 43.81836 43.81641 l -0.92383,-4.33398 C 418.52786,235.61151 399.68158,157.86533 391.06122,124.22496 Z M 1016.5925,269.33238 c -2.7373,0 -3.5933,2.63028 -12.6055,38.7168 -5.31775,21.29325 -9.43903,38.8855 -9.16015,39.09375 0.27889,0.20825 6.63495,1.11278 14.12495,2.01172 34.241,4.10928 68.6943,16.09337 92.2383,32.08203 59.9226,40.69248 87.2217,146.21712 91.6035,354.0957 3.8258,181.49373 -27.7144,312.45672 -85.9082,356.71682 -17.0924,13.0001 -50.1011,27.562 -83.5527,36.8594 l -13.332,3.707 -183.00002,0.3809 c -100.6496,0.2102 -183,0.6804 -183,1.0429 0,0.3626 4.57462,18.9505 10.16601,41.3086 l 10.16602,40.6524 h 165.80273 165.80274 l 23.03122,-4.5996 c 28.1936,-5.6315 47.0963,-10.9859 69.3731,-19.6485 65.5381,-25.4855 102.0579,-58.5209 131.6484,-119.0859 28.15,-57.617 43.261,-125.64135 50.9434,-229.33402 3.6707,-49.54419 1.9358,-156.75667 -3.6582,-226 -13.6843,-169.38693 -52.609,-260.83722 -131.5645,-309.10742 -20.3891,-12.46501 -47.2147,-23.47345 -73.5254,-30.17188 -17.2831,-4.40005 -39.8717,-8.7207 -45.5937,-8.7207 z"
                    variants={drawNew}
                    transform="translate(-33.709554)"
                    />
            </motion.g>

        </motion.svg>
    )

}