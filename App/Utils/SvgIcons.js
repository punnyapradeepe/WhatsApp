import { Image } from "react-native";
import  Svg,{Defs, Path, Pattern, Rect,G, ClipPath}  from "react-native-svg";

export const SideArrow =()=>(
  <Svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
<G clipPath="url(#clip0_0_1412)">
<Path d="M1.5618 17.4135C1.44045 17.5348 1.28877 17.5955 1.12191 17.5955C0.955057 17.5955 0.803373 17.5348 0.682024 17.4135C0.439325 17.1708 0.439325 16.7764 0.682024 16.5337L8.41797 8.79774L0.682024 1.0618C0.439325 0.8191 0.439325 0.424719 0.682024 0.182022C0.924719 -0.0606741 1.3191 -0.0606741 1.5618 0.182022L9.73763 8.35786C9.98033 8.60055 9.98033 8.99494 9.73763 9.23763L1.5618 17.4135Z" fill="black"/>
</G>
<Defs>
<ClipPath id="clip0_0_1412">
<Rect width="9.41966" height="17.5955" fill="white" transform="translate(0.5)"/>
</ClipPath>
</Defs>
</Svg>
)

export const CallImg = ({width,height,fill}) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M22.38 21.7505C22.6059 21.5439 22.7999 21.305 22.9558 21.0415C23.8277 19.568 23.3399 17.6667 21.8664 16.7949L18.5578 14.8373L18.3933 14.7478C17.6143 14.3595 16.6873 14.3855 15.9276 14.8269L14.8967 15.4259L14.7769 15.4881C14.2495 15.7303 13.6203 15.6224 13.2033 15.2054L9.12435 11.1264L9.03362 11.0266C8.66443 10.5788 8.60753 9.943 8.90381 9.4331L9.50284 8.40215C9.9758 7.58819 9.97182 6.58215 9.49245 5.77195L7.53483 2.46333C6.66302 0.989839 4.76176 0.50209 3.28827 1.37391C3.0248 1.52981 2.78587 1.72386 2.57926 1.94977C1.10883 3.55758 0.450612 5.08841 0.66705 6.53998C1.11061 9.51476 3.20202 12.9126 6.91773 16.7701L7.24042 17.0889L7.55965 17.412L7.56595 17.4074C11.4172 21.1277 14.815 23.2191 17.7898 23.6627C19.2413 23.8791 20.7722 23.2209 22.38 21.7505ZM21.5701 20.865C20.1895 22.1276 18.9952 22.6292 17.9667 22.4758C15.3822 22.0905 12.3066 20.2445 8.75629 16.8853L8.17126 16.3237L7.76109 15.9164C4.20759 12.2268 2.25186 9.03183 1.85393 6.36301C1.70058 5.33457 2.20212 4.14025 3.46478 2.75963C3.59141 2.62117 3.73785 2.50223 3.89933 2.40668C4.80244 1.87234 5.96772 2.17128 6.50206 3.07439L8.45968 6.38301C8.71781 6.81927 8.71995 7.36099 8.46528 7.79927L7.86625 8.83022C7.31892 9.77217 7.41784 10.9532 8.10775 11.7899L8.23619 11.9334L12.3548 16.0539C13.1252 16.8243 14.2921 17.0312 15.2777 16.5786L15.4492 16.4912L16.5305 15.8645C16.9382 15.6276 17.4374 15.6121 17.858 15.8218L17.9842 15.8913L21.2554 17.8277C22.1585 18.362 22.4574 19.5273 21.9231 20.4304C21.8275 20.5919 21.7086 20.7383 21.5701 20.865Z" fill={fill} fillOpacity="0.65"/>
</Svg>
)

export const StatusImg =({width,height,fill})=>(
  <Svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M22.2682 4.45036C19.9125 2.03647 16.6907 0.649902 13.2488 0.649902C9.80807 0.649902 6.58629 2.03647 4.23059 4.45036C3.99915 4.68751 4.00378 5.06738 4.24094 5.29882C4.47809 5.53026 4.85796 5.52563 5.0894 5.28847C7.22153 3.10367 10.1348 1.8499 13.2488 1.8499L13.5951 1.85505C16.5788 1.94405 19.3562 3.18459 21.4094 5.28847C21.6408 5.52563 22.0207 5.53026 22.2579 5.29882C22.495 5.06738 22.4996 4.68751 22.2682 4.45036ZM22.25 13.2499C22.25 8.27934 18.2206 4.2499 13.25 4.2499C8.27943 4.2499 4.24999 8.27934 4.24999 13.2499C4.24999 18.2205 8.27943 22.2499 13.25 22.2499C18.2206 22.2499 22.25 18.2205 22.25 13.2499ZM1.13352 9.78163C1.22456 9.46301 1.55665 9.27852 1.87527 9.36956C2.19389 9.4606 2.37838 9.79269 2.28734 10.1113C1.99825 11.1231 1.84999 12.1763 1.84999 13.2499C1.84999 18.4611 5.37661 22.9713 10.3448 24.2765C10.6653 24.3607 10.8568 24.6888 10.7726 25.0093C10.6884 25.3298 10.3603 25.5214 10.0399 25.4372C4.54744 23.9942 0.649994 19.0097 0.649994 13.2499C0.649994 12.0645 0.81387 10.9003 1.13352 9.78163ZM24.6393 9.41248C24.9582 9.32266 25.2896 9.50841 25.3794 9.82737C25.6906 10.9321 25.85 12.0807 25.85 13.2499C25.85 19.0507 21.8973 24.0612 16.3514 25.4652C16.0302 25.5465 15.7039 25.352 15.6225 25.0308C15.5412 24.7096 15.7357 24.3832 16.0569 24.3019C21.0734 23.0319 24.65 18.4982 24.65 13.2499C24.65 12.1909 24.5058 11.1518 24.2244 10.1527C24.1346 9.8337 24.3203 9.50231 24.6393 9.41248ZM13.25 5.4499C8.94217 5.4499 5.44999 8.94208 5.44999 13.2499C5.44999 17.5577 8.94217 21.0499 13.25 21.0499C17.5578 21.0499 21.05 17.5577 21.05 13.2499C21.05 8.94208 17.5578 5.4499 13.25 5.4499Z" fill={fill}/>
</Svg>
)

export  const CameraImg =({width,height,fill}) =>(
  <Svg xmlns="http://www.w3.org/2000/svg" width="26" height="23" viewBox="0 0 26 23" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M17.3562 1.52205C16.805 1.02507 16.0893 0.75 15.3471 0.75H11.2825C10.5406 0.75 9.825 1.02493 9.27392 1.52168L8.47615 2.24079C7.93398 2.72952 7.22994 3 6.5 3C3.18629 3 0.5 5.68629 0.5 9V16.5C0.5 19.8137 3.18629 22.5 6.5 22.5H20C23.3137 22.5 26 19.8137 26 16.5V9C26 5.68629 23.3137 3 20 3L19.7854 2.99118C19.2163 2.94433 18.6759 2.71212 18.2489 2.32708L17.3562 1.52205ZM11.2825 1.95H15.3471C15.7924 1.95 16.2219 2.11504 16.5526 2.41323L17.4453 3.21825C18.0667 3.77861 18.8545 4.11861 19.687 4.18714L19.9507 4.19899C22.651 4.2 24.8 6.34903 24.8 9V16.5C24.8 19.151 22.651 21.3 20 21.3H6.5C3.84903 21.3 1.7 19.151 1.7 16.5V9C1.7 6.42068 3.73444 4.31653 6.28619 4.20468L6.7362 4.19328C7.67771 4.13965 8.57566 3.76667 9.27961 3.13212L10.0774 2.41301C10.408 2.11496 10.8374 1.95 11.2825 1.95ZM13.25 6C16.4256 6 19 8.57436 19 11.75C19 14.9256 16.4256 17.5 13.25 17.5C10.0744 17.5 7.5 14.9256 7.5 11.75C7.5 8.57436 10.0744 6 13.25 6ZM8.7 11.75C8.7 9.2371 10.7371 7.2 13.25 7.2C15.7629 7.2 17.8 9.2371 17.8 11.75C17.8 14.2629 15.7629 16.3 13.25 16.3C10.7371 16.3 8.7 14.2629 8.7 11.75Z" fill={fill} fillOpacity={fill}/>
</Svg>
)

export const ChatImg =({width,height,fill}) =>(
  <Svg xmlns="http://www.w3.org/2000/svg" width="31" height="21" viewBox="0 0 31 21" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M12 0C13.4801 0 14.8976 0.212104 16.2067 0.600006L16.6079 0.725496C17.5317 0.536571 18.501 0.436055 19.5 0.436055C25.8513 0.436055 31 3.92646 31 9.50989C31 12.5259 29.6173 14.7296 26.852 16.121L26.4926 16.2964L26.4163 16.3391C25.282 17.0429 25.2327 18.0251 25.7664 18.9448L25.8428 19.0698L25.8998 19.1756C25.9647 19.3214 25.9845 19.4842 25.9551 19.6429C25.8819 20.0381 25.5278 20.3102 25.1372 20.2913L25.03 20.2788L24.7487 20.2199C23.4417 19.9137 22.2134 19.1745 21.0639 18.0022C19.482 18.1052 17.9452 17.9821 16.5145 17.6717L16.5486 17.66C14.671 18.2571 12.5611 18.5316 10.3681 18.3883C9.16988 19.6142 7.88963 20.3877 6.52739 20.7087L6.23422 20.7706C5.78299 20.8548 5.34892 20.5573 5.2647 20.106C5.2337 19.9399 5.25422 19.7694 5.3219 19.6167L5.38145 19.5059C6.0204 18.5064 6.0204 17.4176 4.78304 16.6474L4.7034 16.6027L4.62171 16.5619C1.54057 15.1153 0 12.7609 0 9.49851C0 3.65377 5.37258 0 12 0ZM12 1.2C5.70091 1.2 1.2 4.60751 1.2 9.49851C1.2 12.2892 2.46609 14.2242 5.15791 15.4883L5.29068 15.5562L5.41721 15.6286C6.84986 16.5205 7.29194 17.8878 6.85537 19.2098L6.79345 19.382L7.07285 19.2751C7.90833 18.9293 8.71965 18.3581 9.50999 17.5495L9.89572 17.1549L10.4464 17.1909C17.1161 17.6266 22.8 13.928 22.8 9.49851C22.8 4.98504 18.0181 1.2 12 1.2ZM18.7712 1.65549C19.0118 1.64261 19.2548 1.63605 19.5 1.63605C25.5121 1.63605 29.8 4.872 29.8 9.50989C29.8 12.1538 28.5991 13.9834 26.036 15.1832L25.9067 15.2491L25.7835 15.3195L25.5991 15.4405C24.4092 16.2661 24.0145 17.4609 24.3524 18.6682L24.4058 18.8411L24.1182 18.7195L23.8323 18.5822C23.1676 18.2432 22.5207 17.774 21.9207 17.162L21.5352 16.769L20.9859 16.8048L20.5201 16.8282C19.9016 16.8501 19.2932 16.8349 18.6993 16.7852L19.0009 16.6278C22.0177 15.0049 24 12.4273 24 9.49851C24 6.24106 21.9284 3.36659 18.7712 1.65549ZM18.7712 1.65549C18.7608 1.64986 18.7503 1.64423 18.7399 1.63862L18.771 1.6555C18.771 1.6555 18.7711 1.6555 18.7712 1.65549Z" fill={fill}/>
</Svg>
)

export const SettingsImg =({width,height,fill}) =>(
  <Svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M21.0444 5.55123L20.938 5.42895L21.4509 5.08039L21.5325 4.98407C21.7621 4.65396 21.7255 4.22355 21.451 3.94898C21.1385 3.63656 20.632 3.63656 20.3196 3.94898L19.788 4.27595L19.6485 4.15458C19.0511 3.65546 18.4 3.21863 17.7051 2.85447L17.523 2.76295L17.7326 2.22768L17.7691 2.11995C17.8661 1.72586 17.6711 1.33245 17.3088 1.17868C16.9021 1.00604 16.4325 1.19579 16.2598 1.6025L16.039 2.14995L15.8842 2.0986C15.1514 1.86967 14.3858 1.71541 13.5964 1.6452L13.393 1.63095L13.4 0.999998L13.3915 0.886542C13.3268 0.485868 12.9935 0.199951 12.6 0.199951C12.1582 0.199951 11.8 0.558123 11.8 0.999951V1.62995L11.6021 1.6446C10.8105 1.71579 10.0431 1.87087 9.3097 2.10089L9.129 2.15995L8.95359 1.61207L8.90322 1.51009C8.69315 1.16283 8.27703 1.02257 7.91215 1.17C7.50249 1.33551 7.30458 1.80177 7.47009 2.21143L7.658 2.77095L7.48902 2.8569C6.79602 3.22119 6.1467 3.6573 5.55128 4.15559L5.416 4.27195L4.98043 3.84902L4.88411 3.7675C4.55401 3.53782 4.12359 3.57442 3.84903 3.84898C3.53661 4.1614 3.53661 4.66794 3.84903 4.98036L4.284 5.40195L4.15462 5.55144C3.65551 6.14883 3.21867 6.79997 2.85452 7.49481L2.765 7.67095L2.22773 7.46733L2.12 7.43084C1.7259 7.33382 1.33249 7.52888 1.17873 7.89114C1.00609 8.29785 1.19584 8.76749 1.60254 8.94013L2.153 9.14995L2.09868 9.31559C1.85087 10.1088 1.69055 10.9406 1.62956 11.8H1.00004L0.886588 11.8085C0.485914 11.8731 0.199997 12.2064 0.199997 12.6C0.199997 13.0418 0.558169 13.4 0.999997 13.4L1.63 13.399L1.64447 13.5958C1.71534 14.3856 1.86969 15.1512 2.09855 15.8829L2.154 16.05L1.6026 16.2597L1.50147 16.3119C1.15793 16.528 1.02496 16.9465 1.17873 17.3088C1.35136 17.7155 1.82101 17.9052 2.22772 17.7326L2.765 17.528L2.8538 17.7049C3.21858 18.3999 3.65555 19.051 4.15502 19.6479L4.278 19.789L3.84906 20.2195L3.76754 20.3158C3.53787 20.6459 3.57447 21.0764 3.84903 21.3509C4.16145 21.6633 4.66798 21.6633 4.9804 21.3509L5.408 20.921L5.55148 21.0453C6.14888 21.5444 6.80002 21.9813 7.49486 22.3454L7.678 22.437L7.46737 22.9722L7.43088 23.0799C7.33387 23.474 7.52893 23.8675 7.89119 24.0212C8.29789 24.1939 8.76754 24.0041 8.94018 23.5974L9.157 23.048L9.31563 23.1013C10.0482 23.3301 10.8137 23.4845 11.6034 23.5552L11.8 23.569V24.1999L11.8085 24.3134C11.8732 24.714 12.2065 25 12.6 25C13.0418 25 13.4 24.6418 13.4 24.2L13.399 23.569L13.597 23.5554C14.3889 23.4842 15.1566 23.3291 15.8902 23.0991L16.065 23.04L16.2464 23.5878L16.2968 23.6898C16.5068 24.0371 16.923 24.1773 17.2878 24.0299C17.6975 23.8644 17.8954 23.3981 17.7299 22.9885L17.537 22.43L17.711 22.343C18.404 21.9787 19.0533 21.5426 19.6487 21.0443L19.783 20.927L20.2196 21.3509L20.3159 21.4324C20.646 21.6621 21.0764 21.6255 21.351 21.3509C21.6634 21.0385 21.6634 20.532 21.351 20.2195L20.915 19.798L21.0454 19.6485C21.5445 19.0511 21.9813 18.3999 22.3455 17.7051L22.429 17.537L22.9723 17.7326L23.08 17.7691C23.4741 17.8661 23.8675 17.671 24.0213 17.3088C24.1939 16.9021 24.0042 16.4324 23.5974 16.2598L23.044 16.054L23.0477 16.0512C23.3063 15.268 23.4792 14.4459 23.5553 13.5963L23.569 13.399L24.2 13.4L24.3134 13.3914C24.7141 13.3268 25 12.9935 25 12.6C25 12.1581 24.6418 11.8 24.2 11.8L23.569 11.799L23.5553 11.6021C23.4842 10.8104 23.3291 10.043 23.0991 9.30966L23.048 9.15595L23.5879 8.95354L23.6899 8.90317C24.0371 8.6931 24.1774 8.27699 24.03 7.9121C23.8644 7.50245 23.3982 7.30453 22.9885 7.47004L22.431 7.66295L22.343 7.48898C21.9788 6.79598 21.5426 6.14666 21.0444 5.55123ZM12.6 2.79995C11.0289 2.79995 9.5442 3.16964 8.22808 3.82678L10.3852 7.56409C11.0628 7.26564 11.8121 7.09995 12.6 7.09995C15.4345 7.09995 17.7682 9.24417 18.0676 11.9991H22.3819C22.0715 6.86656 17.8106 2.79995 12.6 2.79995ZM7.18906 4.42789C4.5439 6.18283 2.8 9.18774 2.8 12.6C2.8 16.0122 4.5439 19.0171 7.18906 20.772L9.34716 17.0354C7.98448 16.0343 7.1 14.4204 7.1 12.6C7.1 10.7795 7.98448 9.16556 9.34716 8.16452L7.18906 4.42789ZM22.3819 13.1998H18.0677C17.7688 15.9552 15.4349 18.1 12.6 18.1C11.8121 18.1 11.0628 17.9343 10.3852 17.6358L8.22808 21.3731C9.5442 22.0303 11.0289 22.4 12.6 22.4C17.811 22.4 22.072 18.3328 22.3819 13.1998ZM8.3 12.6C8.3 10.2251 10.2252 8.29995 12.6 8.29995C14.9748 8.29995 16.9 10.2251 16.9 12.6C16.9 14.9748 14.9748 16.9 12.6 16.9C10.2252 16.9 8.3 14.9748 8.3 12.6Z" fill={fill} fillOpacity="0.65"/>
</Svg>
)