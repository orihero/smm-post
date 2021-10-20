import React from "react";
import { COLORS } from "../constants/colors";

function NewPostsIcon({ width = 32, height = 32, active = false, ...rest }) {
  let color = active ? COLORS.primaryPink : COLORS.darkBlue;
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
  let color = active ? COLORS.primaryPink : COLORS.darkBlue;
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
  let color = active ? COLORS.primaryPink : COLORS.darkBlue;
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
  let color = active ? COLORS.primaryPink : COLORS.darkBlue;
  return (
    <svg
      {...{ width, height, fill: color, stroke: color }}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="feather feather-tool"
    >
      <path
        fill={color}
        stroke={color}
        opacity="0.7"
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      ></path>
    </svg>
  );
}
function SettingsIcon({ width = 32, height = 32, active = false, ...rest }) {
  let color = active ? COLORS.primaryPink : COLORS.darkBlue;
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

export let ICONS = {
  newPosts: NewPostsIcon,
  calendar: CalendarIcon,
  analytics: AnalyticsIcon,
  instruments: InstrumentsIcon,
  settings: SettingsIcon,
};
