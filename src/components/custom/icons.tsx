import * as React from "react"
import { cn } from "@/lib/utils"


export function HeartIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="21"
            height="18"
            viewBox="0 0 21 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("size-5 ", className)}
            {...props}
        >
            <path d="M10.1117 16.605L2.04865 9.23532C-2.33344 4.81344 4.10822 -3.67655 10.1117 3.19209C16.1151 -3.67655 22.5276 4.84293 18.1747 9.23532L10.1117 16.605Z"
             stroke="#012C60" stroke-width="1.21" stroke-linejoin="round" />
        </svg>

    )
}

export const VendorBoxIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (

    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"
        className={cn("size-5", className)}
        {...props}
    >
        <path d="M8.49182 0.606567V5.45903" stroke="#012C60" stroke-width="1.21311" stroke-linejoin="round" />
        <path d="M0.606567 5.45901H16.3771V15.1639C16.3771 15.4857 16.2492 15.7943 16.0217 16.0217C15.7943 16.2492 15.4857 16.377 15.1639 16.377H1.81968C1.49794 16.377 1.18938 16.2492 0.96188 16.0217C0.734378 15.7943 0.606567 15.4857 0.606567 15.1639V5.45901Z" stroke="#012C60" stroke-width="1.21311" stroke-linejoin="round" />
        <path d="M0.606567 5.45903L2.42624 1.95312C2.62241 1.55798 2.92261 1.2238 3.29454 0.986533C3.66647 0.749269 4.09604 0.617903 4.53706 0.606567H12.4466C12.898 0.606806 13.3403 0.732959 13.724 0.97084C14.1076 1.20872 14.4172 1.5489 14.618 1.95312L16.3771 5.45903" stroke="#012C60" stroke-width="1.21311" stroke-linejoin="round" />
        <path d="M8.49133 13.7642V8.16943" stroke="#012C60" stroke-width="1.21311" stroke-linejoin="round" />
        <path d="M10.6147 10.257L8.49148 8.13379L6.36829 10.257" stroke="#012C60" stroke-width="1.21311" stroke-linejoin="round" />
    </svg>


);

export const GroupUsersIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
    <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg"
        className={cn("size-5", className)}
        {...props}
    >
        <path d="M9.30568 10.2439C11.9137 10.2439 14.0279 8.1312 14.0279 5.52503C14.0279 2.91885 11.9137 0.806122 9.30568 0.806122C6.69769 0.806122 4.5835 2.91885 4.5835 5.52503C4.5835 8.1312 6.69769 10.2439 9.30568 10.2439Z" stroke="#012C60" stroke-width="1.61221" stroke-linejoin="round" />
        <path d="M0.806152 23.4569H9.30608H17.806V22.4337C17.791 20.995 17.4113 19.5835 16.7024 18.3312C15.9935 17.0789 14.9786 16.0265 13.7524 15.2725C12.5261 14.5184 11.1287 14.0872 9.6905 14.0192C9.56229 14.0131 9.43411 14.0099 9.30608 14.0097C9.17805 14.0099 9.04987 14.0131 8.92166 14.0192C7.48349 14.0872 6.08602 14.5184 4.85981 15.2725C3.63361 16.0265 2.61866 17.0789 1.90976 18.3312C1.20088 19.5835 0.82119 20.995 0.806152 22.4337V23.4569Z" stroke="#012C60" stroke-width="1.61221" stroke-linejoin="round" />
        <path d="M16.8613 10.2439C19.4693 10.2439 21.5835 8.1312 21.5835 5.52503C21.5835 2.91885 19.4693 0.806122 16.8613 0.806122" stroke="#012C60" stroke-width="1.61221" stroke-linejoin="round" />
        <path d="M21.5833 23.4572H25.3611V22.4337C25.3459 20.995 24.9663 19.5835 24.2574 18.3313C23.5485 17.0789 22.5336 16.0266 21.3073 15.2726C20.5148 14.7851 19.6504 14.4326 18.75 14.2258" stroke="#012C60" stroke-width="1.61221" stroke-linejoin="round" />
    </svg>

);

export const PremiumQltyIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (

    <svg width="68" height="70" viewBox="0 0 68 70" fill="none" xmlns="http://www.w3.org/2000/svg"
     className={cn("size-5", className)}
        {...props}
        >
        <path d="M14 3H6C4.34315 3 3 4.34315 3 6V14M54 3H62C63.6569 3 65 4.34315 65 6V14M3 54V62C3 63.6569 4.34315 65 6 65H14M65 54V62C65 63.6569 63.6569 65 62 65H54" stroke="#FF5A00" strokeWidth="5" strokeLinecap="round"/>
        <path d="M34 16L38.2 27.8L50.5 28.1L40.7 35.6L44.2 47.5L34 40.5L23.8 47.5L27.3 35.6L17.5 28.1L29.8 27.8L34 16Z" stroke="#FF5A00" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>


);
export const EditIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (

  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
   className={cn("size-5 lucide lucide-square-pen-icon lucide-square-pen", className)}
        {...props}
  ><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></svg>
);

export const PrintIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (

 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
  className={cn("size-5 lucide lucide-printer-check-icon lucide-printer-check", className)}
        {...props}
 ><path d="M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5"/><path d="m16 19 2 2 4-4"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/></svg>


);

export const DownloadCloudIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
  className={cn("size-5 lucide lucide-download-cloud-icon lucide-download-cloud", className)}
        {...props}
 ><path d="M12 13v8l-4-4"/><path d="m12 21 4-4"/><path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"/></svg>
);

export const NotificationIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
   <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"
className={cn("size-5", className)}
        {...props}>
<path d="M7.56348 16.3281H10.0676" stroke="#012C60" stroke-width="1.35307" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.8239 6.937C13.8239 5.60871 13.2963 4.33484 12.357 3.3956C11.4177 2.45637 10.1439 1.92871 8.81559 1.92871C7.48731 1.92871 6.21344 2.45637 5.2742 3.3956C4.33497 4.33484 3.80731 5.60871 3.80731 6.937V11.3192C3.80731 11.8173 3.60943 12.2951 3.25722 12.6473C2.90501 12.9995 2.4273 13.1974 1.9292 13.1974H15.702C15.2039 13.1974 14.7261 12.9995 14.3739 12.6473C14.0217 12.2951 13.8239 11.8173 13.8239 11.3192V6.937Z" stroke="#012C60" stroke-width="1.35307" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M0.676758 6.77435C0.677433 5.58255 0.961647 4.40802 1.50593 3.34776C2.05021 2.28751 2.83892 1.37197 3.80694 0.676758" stroke="#012C60" stroke-width="1.35307" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.9534 6.77435C16.9528 5.58255 16.6686 4.40802 16.1243 3.34776C15.58 2.28751 14.7912 1.37197 13.8232 0.676758" stroke="#012C60" stroke-width="1.35307" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

);


// export const OrderInqueryIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
//    <svg width="57" height="61" viewBox="0 0 57 61" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
// <rect width="56.3122" height="60.7155" fill="url(#pattern0_1589_8688)"/>
// <defs>
// <pattern id="pattern0_1589_8688" patternContentUnits="objectBoundingBox" width="1" height="1">
// <use xlink:href="#image0_1589_8688" transform="scale(0.00150376 0.0013947)"/>
// </pattern>
// <image id="image0_1589_8688" width="665" height="717" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
// </defs>
// </svg>


// );








export const CustomMenuIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"
        className={cn("size-5", className)}
        {...props}
    >
        <path d="M16.3771 0.606567H0.606584" stroke="#012C60" stroke-width="1.21311" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M16.3771 4.24591H4.24593" stroke="#012C60" stroke-width="1.21311" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M16.3771 7.88528H7.88527" stroke="#012C60" stroke-width="1.21311" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M16.3771 15.164H0.606584" stroke="#012C60" stroke-width="1.21311" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M16.3771 11.5246H4.24593" stroke="#012C60" stroke-width="1.21311" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);

export const GraphicIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg 
    width="25" 
    height="27" 
    viewBox="0 0 25 27" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={cn("size-5", className)}
    {...props}
  >
    <rect width="24.5405" height="26.4907" fill="url(#pattern0_1004_288)"/>
    <defs>
      <pattern id="pattern0_1004_288" patternContentUnits="objectBoundingBox" width="1" height="1">
        {/* Changed xlink:href to xlinkHref */}
        <use xlinkHref="#image0_1004_288" transform="scale(0.000703235 0.000651466)"/>
      </pattern>
    </defs>
  </svg>
);



export const CustomSquareArrowOutUpRight = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"
        className={cn("size-5", className)}
        {...props}
    >
        <g clip-path="url(#clip0_899_1211)">
            <path d="M18.092 10.7211L18.092 16.7517C18.092 17.1071 17.9508 17.448 17.6995 17.6993C17.4481 17.9506 17.1073 18.0918 16.7519 18.0918L2.01035 18.0918C1.65495 18.0918 1.31402 17.9506 1.06274 17.6993C0.811468 17.448 0.670218 17.1071 0.670218 16.7517L0.670216 2.0102C0.670216 1.65479 0.811467 1.31386 1.06274 1.06259C1.31402 0.811311 1.65495 0.670061 2.01035 0.670061L8.04096 0.67006" stroke="white" stroke-width="2.41224" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.4015 0.670075L18.092 0.670074L18.092 5.36055" stroke="white" stroke-width="2.41224" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M18.092 0.670067L9.3811 9.38095" stroke="white" stroke-width="2.41224" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_899_1211">
                <rect width="18.7619" height="18.7619" fill="white" transform="translate(18.7619 18.7619) rotate(180)" />
            </clipPath>
        </defs>
    </svg>

);

export const GorguseBtnIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
   <svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg"
   className={cn("size-5", className)}
        {...props}>
<path d="M0.319424 2.23389L5.31641 2.23389" stroke="#012C60" stroke-width="0.638826" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.65048 4.14763L5.59375 2.23348L3.65048 0.319335" stroke="#012C60" stroke-width="0.638826" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


);









export function TakaIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
       <svg
  width="46"
  height="58"
  viewBox="0 0 46 58"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className={cn("size-5", className)}
            {...props}
>
  <path
    d="M22 9
       H24
       C27.8 9 30.8 12 30.8 15.8
       C30.8 17.2 30.3 18.6 29.5 19.7
       H37.5
       V24
       H30.8
       V40.8
       H38
       C41.2 40.8 43.5 38.2 43.5 35
       C43.5 31.8 41.2 29.2 38 29.2
       H34.5
       V25
       H38
       C43.5 25 46 29.5 46 35
       C46 40.5 42.5 44.5 37.5 44.5
       H27
       V24
       H22
       V19.7
       H27
       C28.2 19.7 29 18.8 29 17.5
       C29 15.2 27.2 13.5 25 13.5
       H22
       V9Z"
    fill="#FD7034"
  />
</svg>
    )
}


