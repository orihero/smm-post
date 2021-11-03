import React from "react";
import { COLORS } from "../constants/colors";

function NewPostsIcon({ width = 32, height = 32, active = false, ...rest }) {
  let color = active ? COLORS.primaryPink : COLORS.fontColors;
  return (
    <svg
      {...{ width, height, fill: color, stroke: color }}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color}
        stroke={color}
        opacity={0.7}
        d="M30.5392 1.46121C28.5796 -0.498368 26.837 0.0795467 26.837 0.0795467L11.4749 15.429L8.89112 23.109L16.5677 20.5235L31.9209 5.16342C31.9209 5.16342 32.4971 3.42078 30.5392 1.46121ZM17.0798 18.8502L16.2423 19.686L13.623 20.5751C13.42 20.081 13.1187 19.6333 12.7374 19.2592C12.363 18.8783 11.9154 18.577 11.4215 18.3737L12.3106 15.7544L13.1482 14.9186C13.1482 14.9186 14.5281 14.7604 15.8813 16.1153C17.2363 17.4686 17.0798 18.8502 17.0798 18.8502ZM26.6734 28.4436H3.55645V5.32701H12.4476L16.004 1.77061H3.55645C1.6004 1.77061 0 3.37099 0 5.32701V28.4436C0 30.3996 1.6004 32 3.55645 32H26.6734C28.6294 32 30.2298 30.3996 30.2298 28.4436V15.9962L26.6734 19.5526V28.4436Z"
      />
    </svg>
  );
}

function CalendarIcon({ width = 32, height = 32, active = false, ...rest }) {
  let color = active ? COLORS.primaryPink : COLORS.fontColors;
  return (
    <svg
      {...{ width, height, fill: color, stroke: color }}
      {...rest}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color}
        stroke={color}
        opacity={0.7}
        d="M27.2 3.2H24V1.6C24 1.17565 23.8314 0.768687 23.5314 0.468629C23.2313 0.168571 22.8243 0 22.4 0C21.9757 0 21.5687 0.168571 21.2686 0.468629C20.9686 0.768687 20.8 1.17565 20.8 1.6V3.2H11.2V1.6C11.2 1.17565 11.0314 0.768687 10.7314 0.468629C10.4313 0.168571 10.0243 0 9.6 0C9.17565 0 8.76869 0.168571 8.46863 0.468629C8.16857 0.768687 8 1.17565 8 1.6V3.2H4.8C3.52696 3.2 2.30606 3.70571 1.40589 4.60589C0.505713 5.50606 0 6.72696 0 8V27.2C0 28.473 0.505713 29.6939 1.40589 30.5941C2.30606 31.4943 3.52696 32 4.8 32H27.2C28.473 32 29.6939 31.4943 30.5941 30.5941C31.4943 29.6939 32 28.473 32 27.2V8C32 6.72696 31.4943 5.50606 30.5941 4.60589C29.6939 3.70571 28.473 3.2 27.2 3.2ZM28.8 27.2C28.8 27.6243 28.6314 28.0313 28.3314 28.3314C28.0313 28.6314 27.6243 28.8 27.2 28.8H4.8C4.37565 28.8 3.96869 28.6314 3.66863 28.3314C3.36857 28.0313 3.2 27.6243 3.2 27.2V16H28.8V27.2ZM28.8 12.8H3.2V8C3.2 7.57565 3.36857 7.16869 3.66863 6.86863C3.96869 6.56857 4.37565 6.4 4.8 6.4H8V8C8 8.42435 8.16857 8.83131 8.46863 9.13137C8.76869 9.43143 9.17565 9.6 9.6 9.6C10.0243 9.6 10.4313 9.43143 10.7314 9.13137C11.0314 8.83131 11.2 8.42435 11.2 8V6.4H20.8V8C20.8 8.42435 20.9686 8.83131 21.2686 9.13137C21.5687 9.43143 21.9757 9.6 22.4 9.6C22.8243 9.6 23.2313 9.43143 23.5314 9.13137C23.8314 8.83131 24 8.42435 24 8V6.4H27.2C27.6243 6.4 28.0313 6.56857 28.3314 6.86863C28.6314 7.16869 28.8 7.57565 28.8 8V12.8Z"
      />
    </svg>
  );
}
function AnalyticsIcon({ width = 32, height = 32, active = false, ...rest }) {
  let color = active ? COLORS.primaryPink : COLORS.fontColors;
  return (
    <svg
      {...{ width, height, fill: color, stroke: color }}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color}
        stroke={color}
        opacity="0.7"
        d="M18 14V0C19.8958 0 21.7083 0.369792 23.4375 1.10938C25.1667 1.84896 26.6562 2.84375 27.9062 4.09375C29.1562 5.34375 30.151 6.83333 30.8906 8.5625C31.6302 10.2917 32 12.1042 32 14H18ZM14 32C12.1042 32 10.2917 31.6302 8.5625 30.8906C6.83333 30.151 5.34375 29.1562 4.09375 27.9062C2.84375 26.6562 1.84896 25.1667 1.10938 23.4375C0.369792 21.7083 0 19.8958 0 18C0 16.1042 0.369792 14.2917 1.10938 12.5625C1.84896 10.8333 2.84375 9.34375 4.09375 8.09375C5.34375 6.84375 6.83333 5.84896 8.5625 5.10938C10.2917 4.36979 12.1042 4 14 4V18H28C28 19.8958 27.6302 21.7083 26.8906 23.4375C26.151 25.1667 25.1562 26.6562 23.9062 27.9062C22.6562 29.1562 21.1667 30.151 19.4375 30.8906C17.7083 31.6302 15.8958 32 14 32Z"
      />
    </svg>
  );
}
function InstrumentsIcon({ width = 32, height = 32, active = false, ...rest }) {
  let color = active ? COLORS.primaryPink : COLORS.fontColors;
  return (
    <svg
      {...{ width, height, fill: "white", stroke: color, strokeWidth: "2px" }}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="feather feather-tool"
      style={{ transform: "rotateY(180deg)" }}
    >
      <path
        stroke={color}
        opacity="0.7"
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      ></path>
    </svg>
  );
}
function SettingsIcon({ width = 32, height = 32, active = false, ...rest }) {
  let color = active ? COLORS.primaryPink : COLORS.fontColors;
  return (
    <svg
      {...{ width, height, fill: color, stroke: color }}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color}
        stroke={color}
        opacity="0.7"
        d="M31.5775 20.0675L29.1063 18.0673C29.2233 17.3887 29.2837 16.6958 29.2837 16.0029C29.2837 15.31 29.2233 14.6171 29.1063 13.9385L31.5775 11.9383C31.7638 11.7873 31.8972 11.5861 31.9599 11.3615C32.0226 11.1369 32.0116 10.8996 31.9283 10.6811L31.8944 10.5882C31.2141 8.7882 30.1954 7.11955 28.8875 5.66289L28.8196 5.58789C28.661 5.41128 28.4495 5.28432 28.2131 5.22375C27.9767 5.16318 27.7265 5.17183 27.4954 5.24858L24.4282 6.28079C23.2964 5.40216 22.0325 4.70926 20.6668 4.22351L20.0745 1.18758C20.0298 0.959146 19.9128 0.748989 19.7389 0.585033C19.5651 0.421076 19.3426 0.311081 19.1012 0.269662L18.9993 0.251803C17.0337 -0.0839344 14.9663 -0.0839344 13.0007 0.251803L12.8988 0.269662C12.6574 0.311081 12.4349 0.421076 12.2611 0.585033C12.0872 0.748989 11.9702 0.959146 11.9255 1.18758L11.3294 4.23779C9.97459 4.72364 8.71292 5.41618 7.59444 6.28794L4.5046 5.24858C4.27359 5.17122 4.02317 5.16225 3.78664 5.22286C3.55011 5.28347 3.33866 5.41078 3.18039 5.58789L3.11248 5.66289C1.80617 7.12058 0.787655 8.78896 0.105643 10.5882L0.0716888 10.6811C-0.0980824 11.1276 0.0415073 11.6276 0.422549 11.9383L2.92385 13.9599C2.80689 14.6314 2.7503 15.3171 2.7503 15.9993C2.7503 16.6851 2.80689 17.3708 2.92385 18.0388L0.422549 20.0603C0.236162 20.2114 0.102762 20.4126 0.0400887 20.6372C-0.0225851 20.8617 -0.0115633 21.099 0.0716888 21.3176L0.105643 21.4104C0.788501 23.2105 1.79958 24.8714 3.11248 26.3358L3.18039 26.4108C3.33905 26.5874 3.5505 26.7143 3.7869 26.7749C4.02329 26.8355 4.27351 26.8268 4.5046 26.7501L7.59444 25.7107C8.7187 26.5858 9.97501 27.2787 11.3294 27.7609L11.9255 30.8111C11.9702 31.0395 12.0872 31.2497 12.2611 31.4136C12.4349 31.5776 12.6574 31.6876 12.8988 31.729L13.0007 31.7468C14.9843 32.0844 17.0157 32.0844 18.9993 31.7468L19.1012 31.729C19.3426 31.6876 19.5651 31.5776 19.7389 31.4136C19.9128 31.2497 20.0298 31.0395 20.0745 30.8111L20.6668 27.7751C22.032 27.2907 23.303 26.5955 24.4282 25.7179L27.4954 26.7501C27.7264 26.8274 27.9768 26.8364 28.2134 26.7758C28.4499 26.7152 28.6613 26.5879 28.8196 26.4108L28.8875 26.3358C30.2004 24.8678 31.2115 23.2105 31.8944 21.4104L31.9283 21.3176C32.0981 20.8782 31.9585 20.3782 31.5775 20.0675ZM26.4277 14.3599C26.522 14.8992 26.5711 15.4529 26.5711 16.0065C26.5711 16.5601 26.522 17.1137 26.4277 17.653L26.1787 19.0853L28.9969 21.3676C28.5697 22.2994 28.0304 23.1814 27.3898 23.9963L23.8887 22.8212L22.7041 23.7427C21.8024 24.4428 20.7989 24.9928 19.7123 25.3785L18.2749 25.8893L17.5996 29.3538C16.5341 29.4681 15.4584 29.4681 14.3928 29.3538L13.7175 25.8822L12.2914 25.3643C11.2162 24.9785 10.2165 24.4285 9.32233 23.732L8.13771 22.8069L4.61401 23.9927C3.97265 23.1748 3.43693 22.2926 3.00684 21.364L5.85523 19.0603L5.61 17.6316C5.51946 17.0994 5.47041 16.5494 5.47041 16.0065C5.47041 15.46 5.51569 14.9135 5.61 14.3814L5.85523 12.9527L3.00684 10.649C3.43316 9.71675 3.97265 8.83811 4.61401 8.0202L8.13771 9.206L9.32233 8.28093C10.2165 7.58446 11.2162 7.03442 12.2914 6.64868L13.7213 6.13793L14.3966 2.66626C15.4567 2.55196 16.5395 2.55196 17.6034 2.66626L18.2787 6.13078L19.7161 6.64153C20.7989 7.02727 21.8062 7.57731 22.7078 8.27736L23.8925 9.19885L27.3935 8.02377C28.0349 8.84169 28.5706 9.72389 29.0007 10.6525L26.1825 12.9348L26.4277 14.3599ZM16.0038 9.36315C12.3367 9.36315 9.36383 12.1776 9.36383 15.6493C9.36383 19.121 12.3367 21.9355 16.0038 21.9355C19.6708 21.9355 22.6437 19.121 22.6437 15.6493C22.6437 12.1776 19.6708 9.36315 16.0038 9.36315ZM18.9917 18.4781C18.5998 18.8502 18.1341 19.1452 17.6213 19.3463C17.1085 19.5473 16.5588 19.6504 16.0038 19.6496C14.8757 19.6496 13.8156 19.2317 13.0158 18.4781C12.6228 18.107 12.3111 17.6661 12.0987 17.1807C11.8864 16.6952 11.7775 16.1748 11.7784 15.6493C11.7784 14.5814 12.2198 13.5777 13.0158 12.8205C13.8156 12.0633 14.8757 11.649 16.0038 11.649C17.1318 11.649 18.1919 12.0633 18.9917 12.8205C19.3848 13.1916 19.6964 13.6325 19.9088 14.1179C20.1212 14.6034 20.2301 15.1238 20.2292 15.6493C20.2292 16.7172 19.7878 17.7209 18.9917 18.4781Z"
      />
    </svg>
  );
}
function ScripcsIcon({ width = 32, height = 32, active = false, ...rest }) {
  let color = active ? COLORS.primaryPink : COLORS.fontColors;
  return (
    <svg
      {...{ width, height, fill: color, stroke: color }}
      viewBox="0 0 31 30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color}
        stroke={color}
        opacity="0.7"
        d="M21.4833 0.566414C23.248 0.566289 24.9744 1.06329 26.4507 1.99646C27.927 2.92964 29.0891 4.2584 29.7943 5.81977C30.4995 7.38114 30.7172 9.10722 30.4208 10.7863C30.1243 12.4654 29.3266 14.0244 28.1254 15.2722L27.8383 15.5552L14.6524 28.282L14.5723 28.355L14.4877 28.4206C13.4135 29.3143 12.0291 29.7833 10.6118 29.7334C9.1946 29.6835 7.84923 29.1185 6.84536 28.1517C5.8415 27.1848 5.25331 25.8874 5.19867 24.5196C5.14402 23.1518 5.62697 21.8146 6.55072 20.776L6.77585 20.5368L6.79851 20.5208L17.8132 9.86912C18.0964 9.59529 18.4806 9.44122 18.8814 9.44081C19.2822 9.4404 19.6668 9.59368 19.9505 9.86693C20.2342 10.1402 20.3938 10.511 20.3942 10.8979C20.3947 11.2847 20.2358 11.6559 19.9527 11.9297L8.938 22.5814L8.91987 22.5931C8.4753 23.0513 8.22478 23.6537 8.21774 24.2814C8.2107 24.9091 8.44764 25.5166 8.88183 25.984C9.31602 26.4514 9.91592 26.7448 10.5632 26.8063C11.2105 26.8678 11.8581 26.6929 12.3784 26.3162L12.5627 26.1704L12.5642 26.1718L25.7124 13.4843L25.9527 13.2437C27.0105 12.1215 27.5737 10.6456 27.5228 9.12917C27.4719 7.61277 26.8108 6.17518 25.6799 5.1214C24.549 4.06763 23.0372 3.48059 21.4653 3.48483C19.8934 3.48907 18.385 4.08426 17.2602 5.14412L17.026 5.37746L16.9988 5.39496L2.90785 19.0012C2.76746 19.1366 2.60083 19.244 2.41745 19.3172C2.23407 19.3905 2.03754 19.4281 1.83908 19.4281C1.64062 19.428 1.44412 19.3902 1.26079 19.3168C1.07747 19.2435 0.910907 19.136 0.770625 19.0005C0.630342 18.865 0.519084 18.7041 0.443202 18.5272C0.367319 18.3502 0.328299 18.1605 0.328369 17.9689C0.328511 17.5821 0.487867 17.2111 0.77138 16.9377L14.8352 3.35621L14.9047 3.2935C15.7512 2.43065 16.7713 1.74372 17.9025 1.27479C19.0337 0.805859 20.2522 0.564811 21.4833 0.566414Z"
      />
    </svg>
  );
}
export function CallIcon({ width = 32, height = 32, active = false, ...rest }) {
  let color = active ? COLORS.primaryPink : COLORS.fontColors;
  return (
    <svg
      {...{ width, height, fill: color, stroke: color }}
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color}
        stroke={color}
        opacity="0.7"
        d="M1.99033 3.87254C2.30665 3.34878 4.0495 1.44376 5.29322 1.50127C5.665 1.53208 5.99364 1.75699 6.26067 2.01784C6.87379 2.61656 8.62897 4.88101 8.72859 5.35753C8.97096 6.52621 7.57833 7.1999 8.00454 8.37783C9.09112 11.0366 10.9634 12.9088 13.6233 13.9943C14.8003 14.4205 15.474 13.0279 16.6428 13.2713C17.1183 13.3709 19.3839 15.126 19.9826 15.7391C20.2425 16.0051 20.4684 16.3347 20.4992 16.7065C20.5454 18.0159 18.5222 19.7833 18.1278 20.0092C17.1974 20.6747 15.9834 20.6634 14.5035 19.9753C10.3739 18.2572 3.77426 11.7822 2.02422 7.49669C1.35461 6.02505 1.30839 4.80297 1.99033 3.87254Z"
      />
    </svg>
  );
}
export function EyeIcon({ width = 32, height = 32, active = false, ...rest }) {
  let color = active ? COLORS.primaryPink : COLORS.fontColors;
  return (
    <svg
      {...{ width, height, fill: color, stroke: color }}
      viewBox="0 0 60 59"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color}
        stroke={color}
        opacity="0.7"
        d="M52.75 0.625H7.25C5.52609 0.625 3.87279 1.30104 2.65381 2.5044C1.43482 3.70776 0.75 5.33986 0.75 7.04167V51.9583C0.75 53.6601 1.43482 55.2922 2.65381 56.4956C3.87279 57.699 5.52609 58.375 7.25 58.375H52.75C56.325 58.375 59.25 55.4875 59.25 51.9583V7.04167C59.25 5.33986 58.5652 3.70776 57.3462 2.5044C56.1272 1.30104 54.4739 0.625 52.75 0.625ZM52.75 51.9583H7.25V13.4583H52.75V51.9583ZM34.875 32.7083C34.875 35.3713 32.6975 37.5208 30 37.5208C27.3025 37.5208 25.125 35.3713 25.125 32.7083C25.125 30.0454 27.3025 27.8958 30 27.8958C32.6975 27.8958 34.875 30.0454 34.875 32.7083ZM30 19.875C21.1275 19.875 13.555 25.2008 10.5 32.7083C13.555 40.2158 21.1275 45.5417 30 45.5417C38.8725 45.5417 46.445 40.2158 49.5 32.7083C46.445 25.2008 38.8725 19.875 30 19.875ZM30 40.7292C27.8451 40.7292 25.7785 39.8841 24.2548 38.3799C22.731 36.8757 21.875 34.8356 21.875 32.7083C21.875 30.5811 22.731 28.5409 24.2548 27.0367C25.7785 25.5325 27.8451 24.6875 30 24.6875C32.1549 24.6875 34.2215 25.5325 35.7452 27.0367C37.269 28.5409 38.125 30.5811 38.125 32.7083C38.125 34.8356 37.269 36.8757 35.7452 38.3799C34.2215 39.8841 32.1549 40.7292 30 40.7292Z"
      />
    </svg>
  );
}
export function IIcon({ width = 32, height = 32, active = false, ...rest }) {
  let color = active ? COLORS.primaryPink : COLORS.fontColors;
  return (
    <svg
      {...{ width, height, fill: color, stroke: color }}
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11 5V7M11 21C16.523 21 21 16.523 21 11C21 5.477 16.523 1 11 1C5.477 1 1 5.477 1 11C1 16.523 5.477 21 11 21ZM11 9V17V9Z" />
    </svg>
  );
}
export function PencilIcon({
  width = 23,
  height = 20,
  active = false,
  ...rest
}) {
  let color = active ? COLORS.primaryPink : COLORS.fontColors;
  return (
    <svg
      {...{ width, height, fill: color, stroke: color }}
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color}
        stroke={color}
        opacity="0.7"
        d="M12.809,238.52L0,306.637l68.118-12.809l184.277-184.277l-55.309-55.309L12.809,238.52z M60.79,279.943l-41.992,7.896
			l7.896-41.992L197.086,75.455l34.096,34.096L60.79,279.943z"
      />
      <path
        fill={color}
        stroke={color}
        opacity="0.7"
        d="M251.329,0l-41.507,41.507l55.308,55.308l41.507-41.507L251.329,0z M231.035,41.507l20.294-20.294l34.095,34.095
			L265.13,75.602L231.035,41.507z"
      />
    </svg>
  );
}

export const CheckIcon = ({
  width = 20,
  height = 20,
  active = false,
  ...rest
}) => {
  let color = active ? COLORS.primaryPink : COLORS.fontColors;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 12"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.0315 0.339844H13.8028C13.6306 0.339844 13.4671 0.418945 13.3616 0.554297L6.11415 9.73535L2.63896 5.33203C2.58639 5.26529 2.51938 5.21132 2.44296 5.17417C2.36655 5.13703 2.28271 5.11768 2.19775 5.11758H0.969034C0.851261 5.11758 0.786222 5.25293 0.858292 5.34434L5.67294 11.4439C5.89794 11.7287 6.33036 11.7287 6.55712 11.4439L15.1423 0.564844C15.2143 0.475195 15.1493 0.339844 15.0315 0.339844Z"
        fill={color}
      />
    </svg>
  );
};
export const GoogleIcon = ({
  width = 26,
  height = 26,
  active = false,
  color,
  ...rest
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 29 29" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M16.0409 13.0168H15.6909V13.3668V16.7094V17.0594H16.0409H23.5059C22.5887 21.3657 19.0647 24.3816 14.7039 24.3816C9.41531 24.3816 5.02609 19.9924 5.02609 14.7039C5.02609 9.41531 9.41531 5.02609 14.7039 5.02609C17.4056 5.02609 19.7218 6.18221 21.4 7.98943L21.6471 8.25558L21.9039 7.99876L24.3106 5.59209L24.5581 5.34461L24.3106 5.09712C21.8485 2.63496 18.5538 0.983496 14.7039 0.983496C7.15686 0.983496 0.983496 7.15686 0.983496 14.7039C0.983496 22.2509 7.15686 28.4242 14.7039 28.4242C22.274 28.4242 27.7557 22.2269 27.7557 14.7039V13.3668V13.0168H27.4057H16.0409Z" />
    </svg>
  );
};

export const FaceBookIcon = ({
  width = 19,
  height = 38,
  active = false,
  color,
  ...rest
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 39" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M14.6261 8.16005H19.5234V0.925781H13.7665V0.951871C6.79106 1.19893 5.36143 5.11999 5.23542 9.23828H5.22108V12.8507H0.471191V19.9352H5.22108V38.9257H12.3794V19.9352H18.2433L19.376 12.8507H12.3818V10.6682C12.3818 9.27637 13.3079 8.16005 14.6261 8.16005Z" />
    </svg>
  );
};
export const TwitterIcon = ({
  width = 52,
  height = 32,
  active = false,
  color,
  ...rest
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 44 35" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M43.1109 4.51732C41.5408 5.19548 39.8677 5.64498 38.1234 5.86324C39.9178 4.80833 41.2874 3.15062 41.9313 1.15254C40.2583 2.13469 38.411 2.82844 36.4424 3.21558C34.8538 1.55008 32.5896 0.518555 30.1196 0.518555C25.3274 0.518555 21.4694 4.34844 21.4694 9.04355C21.4694 9.7191 21.5274 10.3687 21.6699 10.9871C14.4737 10.6415 8.10603 7.24553 3.82839 2.07233C3.08159 3.34809 2.64353 4.80833 2.64353 6.3803C2.64353 9.33196 4.18728 11.9484 6.48839 13.4632C5.0977 13.4373 3.73339 13.0397 2.57756 12.4135C2.57756 12.4395 2.57756 12.4733 2.57756 12.5071C2.57756 16.6487 5.57798 20.0889 9.51256 20.8814C8.80798 21.071 8.04006 21.162 7.24312 21.162C6.68895 21.162 6.1295 21.1308 5.60437 21.0165C6.72589 24.3916 9.90839 26.873 13.6926 26.9536C10.7476 29.2219 7.00826 30.5886 2.9602 30.5886C2.25034 30.5886 1.56951 30.5574 0.888672 30.4716C4.72298 32.9062 9.26714 34.2963 14.1676 34.2963C30.0959 34.2963 38.8042 21.3049 38.8042 10.0439C38.8042 9.66714 38.791 9.30338 38.7726 8.94221C40.4905 7.7418 41.9339 6.24259 43.1109 4.51732Z" />
    </svg>
  );
};
export const VkontakteIcon = ({
  width = 42,
  height = 32,
  active = false,
  color,
  ...rest
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 54 32" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M12.3348 3.93705C13.7935 7.64233 15.6421 11.1358 18.077 14.2719C18.3999 14.6892 18.807 15.0603 19.2358 15.3624C19.8622 15.8049 20.4532 15.6494 20.7079 14.9123C20.9772 14.1389 21.2245 12.5715 21.2391 11.7593C21.2793 9.63715 21.2331 8.24636 21.1223 6.12681C21.0504 4.76927 20.5813 3.57726 18.6399 3.21748C18.0404 3.10593 17.9847 2.59833 18.3699 2.09197C19.1717 1.03775 20.2888 0.86974 21.5001 0.803251C23.4634 0.694175 25.4338 0.783194 27.3995 0.803251C28.2002 0.810806 29.0056 0.877159 29.7941 1.05396C30.8226 1.28461 31.3734 2.02671 31.5429 3.0595C31.6307 3.59224 31.6758 4.13995 31.6635 4.67901C31.6124 6.99543 31.5039 9.31061 31.4783 11.6258C31.4673 12.5345 31.5318 13.4659 31.7208 14.3509C31.9852 15.5842 32.8017 15.8939 33.6365 15.0027C34.6967 13.8709 35.6314 12.5973 36.5087 11.3038C38.1027 8.95096 39.2932 6.36886 40.3181 3.70653C40.8482 2.33278 41.2541 2.03441 42.6907 2.0307C45.3912 2.02438 48.0917 2.0219 50.7922 2.0307C51.2711 2.03317 51.7719 2.0796 52.224 2.22755C52.9576 2.46824 53.2489 3.08367 53.077 3.86465C52.6761 5.69476 51.7146 7.25026 50.6849 8.74572C49.0325 11.1448 47.3008 13.4864 45.6094 15.8579C45.3937 16.16 45.2037 16.4821 45.0269 16.8092C44.3944 17.985 44.4383 18.6443 45.3608 19.6232C46.8292 21.1813 48.4013 22.639 49.8234 24.2397C50.8568 25.4042 51.8133 26.6677 52.6323 27.9976C53.6681 29.6797 53.0283 31.2641 51.0932 31.5461C49.8758 31.7229 43.9292 31.5475 43.6219 31.5461C42.0231 31.5387 40.6217 30.9683 39.4932 29.8515C38.238 28.6081 37.0973 27.2442 35.8921 25.9469C35.529 25.5557 35.1414 25.181 34.7235 24.8538C33.7376 24.0803 32.77 24.2521 32.3094 25.443C31.9158 26.4659 31.5758 29.1519 31.5599 29.3814C31.4771 30.5809 30.7349 31.3455 29.4285 31.4195C25.6569 31.6301 22.0021 31.1976 18.5974 29.3212C15.7117 27.7318 13.4074 25.4843 11.4112 22.8633C8.24039 18.7003 5.73584 14.1242 3.44924 9.41378C3.33238 9.17296 1.01641 4.10382 0.954171 3.86438C0.747294 3.06266 0.940281 2.29679 1.59884 2.03317C2.00939 1.86887 9.64525 2.03262 9.77226 2.03963C10.9907 2.10749 11.8215 2.63625 12.3348 3.93705Z" fill="white" />
    </svg>
  );
};
export const OrangeIcons = ({
  width = 20,
  height = 20,
  active = false,
  color,
  backgroundColor,
  style = {},
  ...rest
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill={color} fill={backgroundColor} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M10 0C4.4898 0 0 4.4898 0 10C0 15.5102 4.4898 20 10 20C15.5102 20 20 15.5102 20 10C20 4.4898 15.5102 0 10 0ZM13.5714 8.46939L9.4898 12.551C9.28572 12.6531 9.18367 12.7551 8.97959 12.7551C8.77551 12.7551 8.57143 12.6531 8.46939 12.551L6.42857 10.5102C6.12245 10.2041 6.12245 9.69388 6.42857 9.38776C6.73469 9.08163 7.2449 9.08163 7.55102 9.38776L9.08163 10.9184L12.6531 7.34694C12.9592 7.04082 13.4694 7.04082 13.7755 7.34694C13.8776 7.7551 13.8776 8.16327 13.5714 8.46939Z" />
    </svg>
  );
};
export const BulpIcons = ({
  width = 20,
  height = 20,
  active = false,
  color,
  backgroundColor,
  style = {},
  ...rest
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 15 20" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M11.8708 15.9106V16.0133C11.8708 17.8609 10.6387 19.5033 8.79055 19.9139C6.32636 20.4272 4.1702 18.5795 4.1702 16.1159V15.9106H11.8708Z" />
      <path d="M14.951 6.87749C14.951 8.93047 13.5136 11.2914 12.8975 12.1126C12.7949 12.2152 12.7949 12.3179 12.6922 12.5232L12.1788 13.9603C12.0762 14.1656 11.9735 14.2682 11.6655 14.2682H4.17021C3.96487 14.2682 3.75952 14.1656 3.65684 13.9603L3.14347 12.5232C3.14347 12.4205 3.04079 12.3179 2.93812 12.1126C2.42475 11.2914 1.08998 8.93047 0.987305 6.87749C0.987305 5.02981 1.60335 3.28477 2.93812 2.05298C4.27289 0.718544 6.01836 0 7.96917 0C9.91999 0 11.6655 0.821193 13.0002 2.05298C14.2323 3.38742 14.951 5.02981 14.951 6.87749Z" />
    </svg>

  );
};
export let ICONS = {
  newPosts: NewPostsIcon,
  ScripcsIcon,
  calendar: CalendarIcon,
  analytics: AnalyticsIcon,
  instruments: InstrumentsIcon,
  settings: SettingsIcon,
  profile: CallIcon,
};
