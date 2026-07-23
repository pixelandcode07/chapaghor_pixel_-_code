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
            <path d="M10.1117 16.605L2.04865 9.23532C-2.33344 4.81344 4.10822 -3.67655 10.1117 3.19209C16.1151 -3.67655 22.5276 4.84293 18.1747 9.23532L10.1117 16.605Z" stroke="#012C60" stroke-width="1.21" stroke-linejoin="round" />
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






import * as React from "react"
import { cn } from "@/lib/utils"

export function TakaIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={cn("size-5", className)}
            {...props}
        >
            <path d="M8.72 5.75c-.39 0-.76.17-1.02.48a1.59 1.59 0 0 0-.28 1.43.75.75 0 1 1-1.46.34 3.09 3.09 0 0 1 .55-2.78c.56-.66 1.38-1.03 2.21-1.03 1.56 0 2.78 1.16 2.78 2.65v1.41h3.75a.75.75 0 0 1 0 1.5h-3.75v3.23c0 2.12 1.43 3.52 3.25 3.52 1.04 0 1.75-.46 2.13-1.09a1.75 1.75 0 1 1 2.53 2.41 4.56 4.56 0 0 1-4.66 1.18c-2.48-.68-4-2.77-4-5.34v-3.91H6.75a.75.75 0 0 1 0-1.5h4.25V7.04c0-.72-.56-1.29-1.28-1.29Z" />
        </svg>
    )
}


