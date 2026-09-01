import * as React from 'react';
import { cn } from '@/lib/utils';

export function HeartIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="27"
      height="23"
      viewBox="0 0 27 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-5', className)}
      {...props}>
      <path
        d="M13.4787 21.98L2.68296 12.2013C-3.18432 6.33406 5.44056 -4.93108 13.4787 4.18272C21.5168 -4.93108 30.1027 6.37318 24.2745 12.2013L13.4787 21.98Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function LayOutIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
   <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"
   className={cn('size-5', className)}
    {...props}
   >
<g clip-path="url(#clip0_2268_2290)">
<path d="M17.2898 8.64404H11.9697C11.6024 8.64404 11.3047 8.94178 11.3047 9.30906V17.2892C11.3047 17.6564 11.6024 17.9542 11.9697 17.9542H17.2898C17.657 17.9542 17.9548 17.6564 17.9548 17.2892V9.30906C17.9548 8.94178 17.657 8.64404 17.2898 8.64404Z" stroke="currentColor" stroke-width="1.30343" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.2898 0.665039H11.9697C11.6024 0.665039 11.3047 0.962777 11.3047 1.33005V4.00341C11.3047 4.37068 11.6024 4.66842 11.9697 4.66842H17.2898C17.657 4.66842 17.9548 4.37068 17.9548 4.00341V1.33005C17.9548 0.962777 17.657 0.665039 17.2898 0.665039Z" stroke="currentColor" stroke-width="1.30343" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.64626 0.665039H1.32615C0.95887 0.665039 0.661133 0.962777 0.661133 1.33005V9.31022C0.661133 9.6775 0.95887 9.97524 1.32615 9.97524H6.64626C7.01353 9.97524 7.31127 9.6775 7.31127 9.31022V1.33005C7.31127 0.962777 7.01353 0.665039 6.64626 0.665039Z" stroke="currentColor" stroke-width="1.30343" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.64626 13.9521H1.32615C0.95887 13.9521 0.661133 14.2498 0.661133 14.6172V17.2905C0.661133 17.6577 0.95887 17.9555 1.32615 17.9555H6.64626C7.01353 17.9555 7.31127 17.6577 7.31127 17.2905V14.6172C7.31127 14.2498 7.01353 13.9521 6.64626 13.9521Z" stroke="currentColor" stroke-width="1.30343" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2268_2290">
<rect width="18.6204" height="18.6204" fill="white"/>
</clipPath>
</defs>
</svg>

  );
}

export const VendorBoxIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('size-5', className)}
    {...props}>
    <path
      d="M11.2639 0.75V7.21546"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linejoin="round"
    />
    <path
      d="M0.75 7.21543H21.7773V20.1463C21.7773 20.575 21.6068 20.9862 21.3036 21.2893C21.0003 21.5923 20.5888 21.7627 20.1598 21.7627H2.36749C1.9385 21.7627 1.52709 21.5923 1.22375 21.2893C0.920413 20.9862 0.75 20.575 0.75 20.1463V7.21543Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linejoin="round"
    />
    <path
      d="M0.75 7.21546L3.17623 2.54416C3.43779 2.01767 3.83806 1.57241 4.33396 1.25627C4.82987 0.940136 5.40263 0.765103 5.99066 0.75H16.5367C17.1385 0.750318 17.7283 0.918406 18.2399 1.23536C18.7513 1.55232 19.1641 2.00558 19.432 2.54416L21.7773 7.21546"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linejoin="round"
    />
    <path
      d="M11.2629 18.2814V10.8268"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linejoin="round"
    />
    <path
      d="M14.0942 13.6083L11.2633 10.7793L8.43237 13.6083"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linejoin="round"
    />
  </svg>
);

export const GroupUsersIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="27"
    height="25"
    viewBox="0 0 27 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('size-5', className)}
    {...props}>
    <path
      d="M9.24953 10.1878C11.8575 10.1878 13.9717 8.07508 13.9717 5.46891C13.9717 2.86273 11.8575 0.75 9.24953 0.75C6.64154 0.75 4.52734 2.86273 4.52734 5.46891C4.52734 8.07508 6.64154 10.1878 9.24953 10.1878Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linejoin="round"
    />
    <path
      d="M0.75 23.4007H9.24993H17.7499V22.3775C17.7348 20.9388 17.3551 19.5272 16.6462 18.275C15.9374 17.0226 14.9224 15.9703 13.6962 15.2163C12.47 14.4622 11.0725 14.031 9.63435 13.963C9.50613 13.9569 9.37796 13.9537 9.24993 13.9535C9.1219 13.9537 8.99372 13.9569 8.86551 13.963C7.42734 14.031 6.02987 14.4622 4.80365 15.2163C3.57745 15.9703 2.56251 17.0226 1.85361 18.275C1.14473 19.5272 0.765037 20.9388 0.75 22.3775V23.4007Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linejoin="round"
    />
    <path
      d="M16.8054 10.1878C19.4134 10.1878 21.5276 8.07508 21.5276 5.46891C21.5276 2.86273 19.4134 0.75 16.8054 0.75"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linejoin="round"
    />
    <path
      d="M21.5272 23.4009H25.3049V22.3775C25.2898 20.9388 24.9101 19.5273 24.2012 18.2751C23.4923 17.0227 22.4774 15.9704 21.2512 15.2163C20.4586 14.7289 19.5943 14.3764 18.6938 14.1696"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linejoin="round"
    />
  </svg>
);

export const PremiumQltyIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="68"
    height="70"
    viewBox="0 0 68 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('size-5', className)}
    {...props}>
    <path
      d="M14 3H6C4.34315 3 3 4.34315 3 6V14M54 3H62C63.6569 3 65 4.34315 65 6V14M3 54V62C3 63.6569 4.34315 65 6 65H14M65 54V62C65 63.6569 63.6569 65 62 65H54"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
    />
    <path
      d="M34 16L38.2 27.8L50.5 28.1L40.7 35.6L44.2 47.5L34 40.5L23.8 47.5L27.3 35.6L17.5 28.1L29.8 27.8L34 16Z"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const EditIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className={cn(
      'size-5 lucide lucide-square-pen-icon lucide-square-pen',
      className
    )}
    {...props}>
    <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
  </svg>
);

export const PrintIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className={cn(
      'size-5 lucide lucide-printer-check-icon lucide-printer-check',
      className
    )}
    {...props}>
    <path d="M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5" />
    <path d="m16 19 2 2 4-4" />
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2" />
    <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
  </svg>
);

export const DownloadCloudIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className={cn(
      'size-5 lucide lucide-download-cloud-icon lucide-download-cloud',
      className
    )}
    {...props}>
    <path d="M12 13v8l-4-4" />
    <path d="m12 21 4-4" />
    <path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284" />
  </svg>
);

export const NotificationIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="18"
    height="17"
    viewBox="0 0 18 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('size-5', className)}
    {...props}>
    <path
      d="M7.56348 16.3281H10.0676"
      stroke="currentColor"
      stroke-width="1.35307"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.8239 6.937C13.8239 5.60871 13.2963 4.33484 12.357 3.3956C11.4177 2.45637 10.1439 1.92871 8.81559 1.92871C7.48731 1.92871 6.21344 2.45637 5.2742 3.3956C4.33497 4.33484 3.80731 5.60871 3.80731 6.937V11.3192C3.80731 11.8173 3.60943 12.2951 3.25722 12.6473C2.90501 12.9995 2.4273 13.1974 1.9292 13.1974H15.702C15.2039 13.1974 14.7261 12.9995 14.3739 12.6473C14.0217 12.2951 13.8239 11.8173 13.8239 11.3192V6.937Z"
      stroke="currentColor"
      stroke-width="1.35307"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M0.676758 6.77435C0.677433 5.58255 0.961647 4.40802 1.50593 3.34776C2.05021 2.28751 2.83892 1.37197 3.80694 0.676758"
      stroke="currentColor"
      stroke-width="1.35307"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.9534 6.77435C16.9528 5.58255 16.6686 4.40802 16.1243 3.34776C15.58 2.28751 14.7912 1.37197 13.8232 0.676758"
      stroke="currentColor"
      stroke-width="1.35307"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const CustomMenuIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="22"
    height="21"
    viewBox="0 0 22 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('size-5', className)}
    {...props}>
    <path
      d="M21.0273 0.75H2.26498e-05"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linejoin="round"
    />
    <path
      d="M21.0276 5.59909H4.85273"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linejoin="round"
    />
    <path
      d="M21.0276 10.4482H9.70518"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linejoin="round"
    />
    <path
      d="M21.0276 20.1464H0.00026679"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linejoin="round"
    />
    <path
      d="M21.0276 15.2973H4.85273"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linejoin="round"
    />
  </svg>
);

export const GraphicIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="25"
    height="27"
    viewBox="0 0 25 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('size-5', className)}
    {...props}>
    <rect width="24.5405" height="26.4907" fill="url(#pattern0_1004_288)" />
    <defs>
      <pattern
        id="pattern0_1004_288"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1">
        {/* Changed xlink:href to xlinkHref */}
        <use
          xlinkHref="#image0_1004_288"
          transform="scale(0.000703235 0.000651466)"
        />
      </pattern>
    </defs>
  </svg>
);

export const NavMickIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="10"
    height="15"
    viewBox="0 0 10 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('size-5', className)}
    {...props}>
    <path
      d="M4.83453 0C3.37868 0 2.19751 1.21723 2.19751 2.71754V7.24677C2.19751 8.74707 3.37868 9.9643 4.83453 9.9643C6.29039 9.9643 7.47155 8.74707 7.47155 7.24677V2.71754C7.47155 1.21723 6.29039 0 4.83453 0ZM1.31851 6.11446C1.31851 5.73797 1.02459 5.43507 0.659254 5.43507C0.293918 5.43507 0 5.73797 0 6.11446V7.24677C0 9.61163 1.59863 11.5908 3.74077 12.1015C3.98751 12.1603 4.17528 12.3723 4.17528 12.6259C4.17528 12.907 3.94747 13.1348 3.66646 13.1348H2.85677C2.49143 13.1348 2.19751 13.4377 2.19751 13.8141C2.19751 14.1906 2.49143 14.4935 2.85677 14.4935H6.8123C7.17763 14.4935 7.47155 14.1906 7.47155 13.8141C7.47155 13.4377 7.17763 13.1348 6.8123 13.1348H6.00261C5.72159 13.1348 5.49379 12.907 5.49379 12.6259C5.49379 12.3723 5.68155 12.1603 5.92829 12.1015C8.07043 11.5908 9.66906 9.61163 9.66906 7.24677V6.11446C9.66906 5.73797 9.37515 5.43507 9.00981 5.43507C8.64447 5.43507 8.35056 5.73797 8.35056 6.11446V7.24677C8.35056 9.24812 6.77659 10.8701 4.83453 10.8701C2.89248 10.8701 1.31851 9.24812 1.31851 7.24677V6.11446Z"
      fill="#FD7034"
    />
  </svg>
);

export const CustomSquareArrowOutUpRight = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('size-5', className)}
    {...props}>
    <g clip-path="url(#clip0_899_1211)">
      <path
        d="M18.092 10.7211L18.092 16.7517C18.092 17.1071 17.9508 17.448 17.6995 17.6993C17.4481 17.9506 17.1073 18.0918 16.7519 18.0918L2.01035 18.0918C1.65495 18.0918 1.31402 17.9506 1.06274 17.6993C0.811468 17.448 0.670218 17.1071 0.670218 16.7517L0.670216 2.0102C0.670216 1.65479 0.811467 1.31386 1.06274 1.06259C1.31402 0.811311 1.65495 0.670061 2.01035 0.670061L8.04096 0.67006"
        stroke="currentColor"
        stroke-width="2.41224"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.4015 0.670075L18.092 0.670074L18.092 5.36055"
        stroke="currentColor"
        stroke-width="2.41224"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.092 0.670067L9.3811 9.38095"
        stroke="currentColor"
        stroke-width="2.41224"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_899_1211">
        <rect
          width="18.7619"
          height="18.7619"
          fill="white"
          transform="translate(18.7619 18.7619) rotate(180)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const GorguseBtnIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
   <svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg"
   className={cn("size-5", className)}
        {...props}>
<path d="M0.319424 2.23389L5.31641 2.23389" stroke="currentColor" stroke-width="0.638826" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.65048 4.14763L5.59375 2.23348L3.65048 0.319335" stroke="currentColor" stroke-width="0.638826" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


);

export const NavSearchIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('size-5', className)}
    {...props}>
    <path
      d="M10.8027 5.39654C10.8027 7.35642 10.7859 9.60181 12.1718 10.9876L13.0515 11.8672C13.3761 12.1915 13.3761 12.7182 13.0515 13.0425C12.7269 13.3668 12.1998 13.3668 11.8752 13.0425L10.9973 12.1648C9.61067 10.7782 7.3623 10.7931 5.40134 10.7931C2.41762 10.7931 0 8.37761 0 5.39654C0 2.41547 2.41762 0 5.40134 0C8.38507 0 10.8027 2.41547 10.8027 5.39654ZM5.40134 9.13261C7.46517 9.13261 9.14073 7.45853 9.14073 5.39654C9.14073 3.33455 7.46517 1.66047 5.40134 1.66047C3.33752 1.66047 1.66195 3.33455 1.66195 5.39654C1.66195 7.45853 3.33752 9.13261 5.40134 9.13261Z"
      fill="#727272"
    />
  </svg>
);

export const TopNComboIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="46"
    height="46"
    viewBox="0 0 46 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('size-5', className)}
    {...props}>
    <path
      d="M13.2153 32.0943L32.0943 13.2153"
      stroke="currentColor"
      stroke-width="2.5172"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.2153 13.2153H32.0943V32.0943"
      stroke="currentColor"
      stroke-width="2.5172"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const GraphiCloneIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="15"
    height="14"
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('size-5', className)}
    {...props}>
    <path
      d="M5.16711 1.50049H2.66689C1.56223 1.50049 0.666718 2.396 0.666718 3.50066V11.0013C0.666718 12.106 1.56223 13.0015 2.66689 13.0015H10.6676C11.7723 13.0015 12.6678 12.106 12.6678 11.0013V9.00115M7.66733 8.5011V4.50075C7.66733 3.39608 8.56284 2.50058 9.66751 2.50058H12.6678"
      stroke="currentColor"
      stroke-width="1.33345"
      stroke-linecap="square"
    />
    <path d="M14.667 2.50022L11.6667 0V5.00044L14.667 2.50022Z" fill="white" />
  </svg>
);

export const GraphicHeartIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="16"
    height="14"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('size-5', className)}
    {...props}>
    <path
      d="M14.1407 1.63211C13.7797 1.27444 13.351 0.990704 12.8792 0.797124C12.4073 0.603543 11.9016 0.503906 11.3909 0.503906C10.8802 0.503906 10.3744 0.603543 9.90261 0.797124C9.43078 0.990704 9.0021 1.27444 8.64105 1.63211L7.89173 2.37406L7.14242 1.63211C6.41312 0.909973 5.42397 0.504281 4.39258 0.504281C3.36119 0.504281 2.37205 0.909973 1.64274 1.63211C0.913441 2.35425 0.503723 3.33367 0.503723 4.35493C0.503723 5.37618 0.913441 6.35561 1.64274 7.07775L2.39206 7.8197L7.89173 13.2653L13.3914 7.8197L14.1407 7.07775C14.5019 6.72024 14.7885 6.29577 14.984 5.82858C15.1795 5.36139 15.2801 4.86064 15.2801 4.35493C15.2801 3.84922 15.1795 3.34847 14.984 2.88128C14.7885 2.41409 14.5019 1.98962 14.1407 1.63211V1.63211Z"
      stroke="currentColor"
      stroke-width="1.00748"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
export const GraphicDonwloadIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('size-5', className)}
    {...props}>
    <g filter="url(#filter0_d_2268_5161)">
      <path
        d="M9.07633 10.5574L9.07633 2.21289M9.07633 10.5574C8.52903 10.5574 7.5065 8.89329 7.12231 8.4713M9.07633 10.5574C9.62363 10.5574 10.6462 8.89329 11.0303 8.4713"
        stroke="currentColor"
        stroke-width="1.25168"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.3285 12.2266C15.3285 14.2977 14.9236 14.7299 12.9837 14.7299H5.16763C3.22769 14.7299 2.82281 14.2977 2.82281 12.2266"
        stroke="currentColor"
        stroke-width="1.25168"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_2268_5161"
        x="-1.85966e-05"
        y="0.000206947"
        width="19.3719"
        height="19.3835"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="0.610272" dy="1.22054" />
        <feGaussianBlur stdDeviation="1.40363" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2268_5161"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_2268_5161"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

// import { cn } from "@/lib/utils";

export function TakaIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 475.56 751.78"
      className={cn("size-5", className)}
      {...props}
    >
      <path
        fill="currentColor"
        d="M295.6,399.47c24.54-5.46,48.77-1.87,71.43,5.21,77.47,24.24,124,101.16,103.83,181.78-23.24,92.92-105.25,156.18-200.91,162.56-56.22,3.75-110,2.61-166.23,2.55l.05-461.78-87.96-.42-.1-96.98,88.72.25-.35-32.05c-.53-47.91-49.55-65.26-103.76-63.57L0,0c36.94.23,74.53,4.23,109.23,19.72,67.5,30.14,102.8,98.22,91.34,172.88l151.29-.17.4,97.13-150.24-.04.04,364.45c78.79,3.74,152.68-11.68,174.67-88.97,5.21-18.32-.93-38.38-11.94-51.17-21.56,22.46-43.88,32.82-71.55,28.03-22.45-3.88-45.09-18.99-53.03-44.54-13.4-43.14,8.33-87.39,55.41-97.85Z"
      />
    </svg>
  );
}
export function WhatsAppIcons({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"
    className={cn("size-5", className)}
      {...props}
    >
<path d="M11.0068 0C17.0855 0.000129433 22.0135 4.9282 22.0137 11.0068C22.0137 17.0856 17.0856 22.0135 11.0068 22.0137C9.08981 22.0137 7.28747 21.5237 5.71777 20.6621L0 22.0137L1.46582 16.499C0.533602 14.8829 0 13.0067 0 11.0068C0.000141892 4.92812 4.92809 0 11.0068 0ZM11.0068 1.97168C6.01676 1.97168 1.97168 6.01676 1.97168 11.0068C1.97169 12.9308 2.57253 14.7143 3.59766 16.1797L2.65039 19.4082L6.02832 18.5479C7.45585 19.4923 9.16717 20.042 11.0068 20.042C15.9968 20.0419 20.042 15.9968 20.042 11.0068C20.042 6.01684 15.9968 1.97181 11.0068 1.97168ZM7.98242 5.5752C8.11719 5.56424 8.24135 5.64242 8.29883 5.76465L9.55371 8.42773C9.61296 8.55357 9.58745 8.7033 9.48926 8.80176L8.55273 9.73828C8.3506 9.94069 8.29134 10.2559 8.43066 10.5059C8.77218 11.1183 9.23168 11.7083 9.76367 12.251C10.3063 12.7829 10.8964 13.2418 11.5088 13.583C11.7589 13.7224 12.0737 13.6633 12.2764 13.4609L13.2119 12.5254C13.3103 12.427 13.4601 12.4006 13.5859 12.46L16.249 13.7158C16.3712 13.7732 16.4493 13.8969 16.4385 14.0312C16.4097 14.3816 16.2692 15.0843 15.6396 15.7139C13.8626 17.4905 10.6719 15.48 10.542 15.4023C9.75726 14.9808 9.01178 14.4167 8.30469 13.71C7.59789 13.0032 7.03293 12.2574 6.61133 11.4727C6.53336 11.343 4.52258 8.15133 6.2998 6.37402C6.92933 5.74449 7.63204 5.60394 7.98242 5.5752Z" fill="black"/>
</svg>

  );
}
export function SupportBannerArrow({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg"
     className={cn("size-5", className)}
      {...props}
    >
<path d="M1.04782 7.22143L17.168 7.22144" stroke="black" stroke-width="2.09509" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.7936 13.3976L18.0625 7.2226L11.7936 1.04761" stroke="black" stroke-width="2.09509" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


  );
}



export function FacebookIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="12"
      height="22"
      viewBox="0 0 12 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-5', className)}
      {...props}>
      <path
        d="M7.18988 21.329V11.6001H10.4542L10.9439 7.80747H7.18988V5.38642C7.18988 4.2887 7.49346 3.54062 9.06936 3.54062L11.076 3.53979V0.147512C10.729 0.102416 9.53779 -0.000976562 8.15135 -0.000976562C5.25623 -0.000976562 3.27418 1.76618 3.27418 5.0108V7.80747H0V11.6001H3.27418V21.329H7.18988Z"
        fill="#F1FAEE"
      />
    </svg>
  );
}

export function TwitterIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="22"
      height="18"
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-5', className)}
      {...props}>
      <path
        d="M21.33 2.05168C20.5368 2.39963 19.6916 2.63026 18.8104 2.74224C19.7169 2.20099 20.4088 1.35046 20.7341 0.325282C19.8889 0.829204 18.9557 1.18515 17.9612 1.38378C17.1587 0.529251 16.0148 0 14.767 0C12.3461 0 10.397 1.96503 10.397 4.37398C10.397 4.7206 10.4264 5.05388 10.4984 5.37116C6.86293 5.19385 3.6461 3.45146 1.4851 0.797209C1.10783 1.45177 0.886528 2.20099 0.886528 3.00753C0.886528 4.52196 1.66641 5.86442 2.82889 6.64163C2.12633 6.6283 1.43711 6.42433 0.8532 6.10305C0.8532 6.11638 0.8532 6.13371 0.8532 6.15104C0.8532 8.27604 2.36896 10.0411 4.35665 10.4477C4.00071 10.545 3.61277 10.5917 3.21017 10.5917C2.93021 10.5917 2.64759 10.5757 2.38229 10.517C2.94887 12.2488 4.55662 13.5219 6.46832 13.5632C4.98056 14.727 3.09152 15.4283 1.0465 15.4283C0.687893 15.4283 0.343946 15.4123 0 15.3683C1.93703 16.6174 4.23267 17.3306 6.70828 17.3306C14.755 17.3306 19.1543 10.665 19.1543 4.88724C19.1543 4.69393 19.1477 4.5073 19.1383 4.32199C20.0062 3.70609 20.7354 2.93687 21.33 2.05168Z"
        fill="#F1FAEE"
      />
    </svg>
  );
}

export function LinkedinIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-5', className)}
      {...props}>
      <path
        d="M19.1963 19.1953V12.9457C19.1963 9.87413 18.535 7.52783 14.9516 7.52783C13.2238 7.52783 12.072 8.46635 11.6028 9.36221H11.5601V7.80512H8.16864V19.1953H11.7094V13.5429C11.7094 12.0498 11.9867 10.6207 13.8211 10.6207C15.6341 10.6207 15.6555 12.3058 15.6555 13.6282V19.174H19.1963V19.1953Z"
        fill="#F1FAEE"
      />
      <path
        d="M2.40771 7.80615H5.94849V19.1964H2.40771V7.80615Z"
        fill="#F1FAEE"
      />
      <path
        d="M4.18031 2.13232C3.04982 2.13232 2.13263 3.04951 2.13263 4.18C2.13263 5.31049 3.04982 6.24901 4.18031 6.24901C5.3108 6.24901 6.22799 5.31049 6.22799 4.18C6.22799 3.04951 5.3108 2.13232 4.18031 2.13232Z"
        fill="#F1FAEE"
      />
    </svg>
  );
}

export function InstagramIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-5', className)}
      {...props}>
      <g clipPath="url(#clip0_2268_3640)">
        <path
          d="M21.3085 6.2701C21.2586 5.13676 21.0753 4.35759 20.8127 3.68244C20.5419 2.96577 20.1252 2.32415 19.5793 1.79076C19.0459 1.24907 18.4001 0.828157 17.6917 0.561545C17.0126 0.299003 16.2375 0.115727 15.1042 0.0657578C13.9624 0.0115565 13.5999 -0.000976562 10.7039 -0.000976562C7.808 -0.000976562 7.44552 0.0115565 6.30794 0.0615259C5.1746 0.111495 4.39543 0.294933 3.72044 0.557314C3.00362 0.828157 2.36199 1.24484 1.8286 1.79076C1.28691 2.32415 0.866162 2.97001 0.599387 3.67837C0.336844 4.35759 0.153569 5.13252 0.1036 6.26587C0.0493983 7.40768 0.0368652 7.77016 0.0368652 10.6661C0.0368652 13.5621 0.0493983 13.9245 0.0993677 15.0621C0.149337 16.1955 0.332775 16.9746 0.595318 17.6498C0.866162 18.3664 1.28691 19.0081 1.8286 19.5415C2.36199 20.0831 3.00785 20.5041 3.71621 20.7707C4.39543 21.0332 5.17037 21.2165 6.30387 21.2665C7.44129 21.3166 7.80393 21.329 10.6999 21.329C13.5958 21.329 13.9583 21.3166 15.0959 21.2665C16.2292 21.2165 17.0084 21.0332 17.6834 20.7707C19.1169 20.2164 20.2502 19.0831 20.8044 17.6498C21.0668 16.9706 21.2503 16.1955 21.3002 15.0621C21.3502 13.9245 21.3627 13.5621 21.3627 10.6661C21.3627 7.77016 21.3585 7.40768 21.3085 6.2701ZM19.3877 14.9788C19.3418 16.0205 19.1668 16.583 19.021 16.958C18.6626 17.8873 17.9251 18.6248 16.9959 18.9832C16.6208 19.129 16.0543 19.304 15.0166 19.3497C13.8916 19.3998 13.5542 19.4122 10.7082 19.4122C7.8622 19.4122 7.52056 19.3998 6.39958 19.3497C5.35787 19.304 4.79535 19.129 4.42034 18.9832C3.95792 18.8123 3.537 18.5414 3.19535 18.1872C2.84117 17.8414 2.57033 17.4247 2.39943 16.9623C2.25359 16.5872 2.07861 16.0205 2.03287 14.983C1.98274 13.858 1.97037 13.5204 1.97037 10.6744C1.97037 7.82843 1.98274 7.48678 2.03287 6.36597C2.07861 5.32426 2.25359 4.76174 2.39943 4.38673C2.57033 3.92414 2.84117 3.50339 3.19959 3.16158C3.5453 2.8074 3.96199 2.53656 4.42457 2.36582C4.79958 2.21998 5.36634 2.045 6.40381 1.9991C7.52886 1.94913 7.86644 1.9366 10.7122 1.9366C13.5625 1.9366 13.8999 1.94913 15.0208 1.9991C16.0626 2.045 16.6251 2.21998 17.0001 2.36582C17.4625 2.53656 17.8834 2.8074 18.2251 3.16158C18.5793 3.50746 18.8501 3.92414 19.021 4.38673C19.1668 4.76174 19.3418 5.32833 19.3877 6.36597C19.4377 7.49102 19.4502 7.82843 19.4502 10.6744C19.4502 13.5204 19.4377 13.8537 19.3877 14.9788Z"
          fill="#F1FAEE"
        />
        <path
          d="M10.7053 5.18652C7.68031 5.18652 5.22595 7.64072 5.22595 10.6659C5.22595 13.6911 7.68031 16.1453 10.7053 16.1453C13.7305 16.1453 16.1847 13.6911 16.1847 10.6659C16.1847 7.64072 13.7305 5.18652 10.7053 5.18652ZM10.7053 14.2202C8.74285 14.2202 7.15099 12.6285 7.15099 10.6659C7.15099 8.70326 8.74285 7.11157 10.7053 7.11157C12.668 7.11157 14.2597 8.70326 14.2597 10.6659C14.2597 12.6285 12.668 14.2202 10.7053 14.2202Z"
          fill="#F1FAEE"
        />
        <path
          d="M17.6779 4.96961C17.6779 5.67602 17.1051 6.2488 16.3986 6.2488C15.6922 6.2488 15.1194 5.67602 15.1194 4.96961C15.1194 4.26304 15.6922 3.69043 16.3986 3.69043C17.1051 3.69043 17.6779 4.26304 17.6779 4.96961Z"
          fill="#F1FAEE"
        />
      </g>
      <defs>
        <clipPath id="clip0_2268_3640">
          <rect width="21.33" height="21.33" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function ArrowIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-5', className)}
      {...props}>
      <path
        d="M4.88513 2.66431L9.32617 7.10535L4.88513 11.5464"
        stroke="currentColor"
        strokeWidth="1.77641"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function PhoneIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-5', className)}
      {...props}>
      <g opacity="0.3">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.93755 11.775L7.05444 9.65788C7.34963 9.36264 7.71933 9.22422 8.13577 9.2529C8.55221 9.28159 8.89945 9.46954 9.15133 9.80241L12.286 13.9457C12.7085 14.5042 12.6553 15.2771 12.1601 15.7723L10.693 17.2396C12.9506 19.159 14.8382 21.0476 16.7573 23.3051L18.2247 21.8374C18.72 21.3421 19.4927 21.289 20.0511 21.7116L24.1938 24.8466C24.5267 25.0985 24.7146 25.4458 24.7433 25.8623C24.7719 26.2788 24.6335 26.6486 24.3383 26.9438L22.2211 29.0613C17.3459 33.9372 0.0621953 16.651 4.93755 11.775ZM23.0204 4.0791C26.8307 4.0791 29.9197 6.96686 29.9197 10.5291C29.9197 14.0914 26.8307 16.9792 23.0204 16.9792C21.7119 16.9792 20.4886 16.6387 19.4461 16.0472C18.5973 16.423 17.6865 16.5316 16.8148 16.4027C17.1412 15.7849 17.3844 15.1265 17.5381 14.4448C16.6494 13.3591 16.1211 12.0019 16.1211 10.5291C16.1211 6.96686 19.21 4.0791 23.0204 4.0791Z"
          stroke="currentColor"
          strokeWidth="0.68"
          strokeMiterlimit="22.9256"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.0045 13.6367V9.81455H22.134M22.0933 13.6756H23.9158M23.0045 7.2959V7.31563"
          stroke="currentColor"
          strokeWidth="0.68"
          strokeMiterlimit="22.9256"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
export function ArrowiconProduct({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"
    className={cn('size-5', className)}
    >
    <path d="M0.85421 5.88977L13.999 5.88977" stroke="currentColor" stroke-width="1.70839" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.61567 10.9247L14.7275 5.88945L9.61567 0.854186" stroke="currentColor" stroke-width="1.70839" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

  );
}

export function EmailIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-5', className)}
      {...props}>
      <g opacity="0.3">
        <mask
          id="mask0_2268_3607"
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="4"
          y="4"
          width="26"
          height="26">
          <path
            d="M29.5798 29.5811V4.4209H4.41968V29.5811H29.5798Z"
            fill="white"
            stroke="currentColor"
            strokeWidth="0.68"
          />
        </mask>

        <g mask="url(#mask0_2268_3607)">
          <path
            d="M18.4867 14.6198C18.4867 15.8833 17.7113 16.8296 16.7829 16.8296C15.8545 16.8296 15.0334 15.8965 15.0334 14.6329C15.0334 13.3693 15.9001 12.5274 16.8285 12.5274C17.7569 12.5274 18.4867 13.3562 18.4867 14.6198Z"
            stroke="currentColor"
            strokeWidth="0.68"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.9097 18.9683C15.0631 18.9172 13.3793 17.6674 12.8794 15.7664C12.3023 13.5722 13.5645 11.2804 15.7264 10.5922C18.0129 9.86438 20.4446 11.1507 21.1355 13.4398C21.38 14.3557 21.2373 15.1526 20.9133 15.9671C20.7849 16.2901 20.3613 17.0462 19.419 17.0462C18.9045 17.0462 18.4756 16.5531 18.4785 15.9853L18.4971 12.2222"
            stroke="currentColor"
            strokeWidth="0.68"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.1353 13.439C21.3797 14.3549 21.237 15.1518 20.9131 15.9663"
            stroke="currentColor"
            strokeWidth="0.68"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.6486 7.86475L16.9997 4.83661L13.3508 7.86475"
            stroke="currentColor"
            strokeWidth="0.68"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.41947 11.9567L4.83618 14.9304V29.1626H29.1622V14.9304L25.5789 11.9567"
            stroke="currentColor"
            strokeWidth="0.68"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.9991 22.501L25.5789 17.1609V7.86499H8.41943V17.1609L16.9991 22.501Z"
            stroke="currentColor"
            strokeWidth="0.68"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M29.1622 14.9304L16.9992 22.5007L4.83618 14.9304V29.1626H29.1622V14.9304Z"
            stroke="currentColor"
            strokeWidth="0.68"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
}
