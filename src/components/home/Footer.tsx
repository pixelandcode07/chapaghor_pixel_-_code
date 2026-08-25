"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import {
  FaWhatsapp,
  FaInfoCircle,
  FaHeadset,
  FaLink,
  FaPhoneAlt,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

const informationLinks = [
  "About Us",
  "Our Service",
  "Order Information",
  "Artwork Instructions",
  "FAQ",
];

const supportLinks = [
  "Help Business",
  "Solutions Find",
  "Stores My Account",
  "Payment Methods",
  "Track Order",
];

const importantLinks = [
  "Privacy Policy",
  "Delivery & Return Policy",
  "Terms & conditions",
  "Shipping Policy",
  "Packaging",
];

const paymentMethods = [
  "dbbl_nexus",
  "bkash",
  "nagad",
  "rocket",
  "upay",
  "visa",
  "mastercard",
  "american_express",
  "unionpay",
  "diners_club",
];

const mobilePaymentMethods = [
  "visa",
  "mastercard",
  "american_express",
  "unionpay",
  "diners_club",
  "dbbl_nexus",
  "bkash",
  "nagad",
  "rocket",
  "upay",
];

/* =========================================================
   EXACT FIGMA SOCIAL SVGs
}