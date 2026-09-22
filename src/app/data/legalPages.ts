import { LEGAL_PATHS } from '../lib/site'

export type LegalSection = {
  heading: string
  paragraphs: string[]
  list?: string[]
}

export type LegalPageData = {
  slug: string
  path: string
  title: string
  description: string
  updated: string
  sections: LegalSection[]
}

export const LEGAL_PAGES: Record<keyof typeof LEGAL_PATHS, LegalPageData> = {
  privacy: {
    slug: 'privacy-policy',
    path: LEGAL_PATHS.privacy,
    title: 'Privacy Policy',
    description: 'How Royal Glow Cleaning collects, uses, and protects your personal information.',
    updated: 'September 22, 2025',
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'Royal Glow Cleaning ("we," "us," or "our") respects your privacy. This Privacy Policy explains what information we collect when you visit our website, request a quote, or book a cleaning service, and how we use that information.',
          'By using our website or services, you agree to the practices described in this policy.',
        ],
      },
      {
        heading: 'Information we collect',
        paragraphs: ['We may collect the following types of information:'],
        list: [
          'Contact details such as your name, phone number, email address, and service address',
          'Booking details including preferred dates, service type, home size, and special instructions',
          'Payment-related information processed through our payment partners (we do not store full card numbers on our servers)',
          'Communications you send us via forms, email, phone, or WhatsApp',
          'Technical data such as IP address, browser type, and pages visited (via cookies and analytics, where enabled)',
        ],
      },
      {
        heading: 'How we use your information',
        paragraphs: ['We use your information to:'],
        list: [
          'Respond to inquiries and provide quotes',
          'Schedule, perform, and manage cleaning services',
          'Send appointment confirmations, reminders, and service updates',
          'Process payments and maintain billing records',
          'Improve our website, services, and customer experience',
          'Comply with legal obligations and resolve disputes',
        ],
      },
      {
        heading: 'Sharing of information',
        paragraphs: [
          'We do not sell your personal information. We may share information with trusted service providers who help us operate our business — for example, scheduling tools, payment processors, or messaging platforms — only as needed to deliver our services.',
          'We may also disclose information if required by law or to protect the rights, safety, and property of Royal Glow Cleaning, our customers, or others.',
        ],
      },
      {
        heading: 'Data retention',
        paragraphs: [
          'We retain personal information only as long as necessary to provide services, meet legal requirements, resolve disputes, and enforce our agreements.',
        ],
      },
      {
        heading: 'Your rights',
        paragraphs: [
          'Depending on your location, you may have the right to access, correct, delete, or restrict the use of your personal information. To make a request, contact us at royalglowcleaning01@gmail.com or (908) 733-6768.',
        ],
      },
      {
        heading: 'Children\'s privacy',
        paragraphs: [
          'Our services are not directed to children under 13, and we do not knowingly collect personal information from children.',
        ],
      },
      {
        heading: 'Changes to this policy',
        paragraphs: [
          'We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page reflects the most recent revision.',
        ],
      },
      {
        heading: 'Contact us',
        paragraphs: [
          'If you have questions about this Privacy Policy, contact Royal Glow Cleaning at royalglowcleaning01@gmail.com or (908) 733-6768.',
        ],
      },
    ],
  },
  terms: {
    slug: 'terms-and-conditions',
    path: LEGAL_PATHS.terms,
    title: 'Terms & Conditions',
    description: 'Terms and conditions for using Royal Glow Cleaning website and booking services.',
    updated: 'September 22, 2025',
    sections: [
      {
        heading: 'Agreement',
        paragraphs: [
          'These Terms & Conditions ("Terms") govern your use of the Royal Glow Cleaning website and the booking of our residential cleaning services in New Jersey. By accessing our website or booking a service, you agree to these Terms.',
        ],
      },
      {
        heading: 'Services',
        paragraphs: [
          'Royal Glow Cleaning provides residential cleaning services including standard cleaning, deep cleaning, move-in/move-out cleaning, and related add-ons as described on our website. Service scope, pricing, and availability are confirmed at the time of booking or quote.',
        ],
      },
      {
        heading: 'Bookings and access',
        paragraphs: [
          'You agree to provide accurate contact and address information and to ensure safe access to the property at the scheduled time. If we cannot access the home or conditions prevent safe work, we may reschedule or charge a trip fee where permitted.',
        ],
      },
      {
        heading: 'Pricing and payment',
        paragraphs: [
          'Quoted prices are based on the information you provide. Final pricing may change if the actual condition, size, or scope of work differs materially from what was described. Payment terms are communicated at booking and must be satisfied according to our billing policy.',
        ],
      },
      {
        heading: 'Cancellations and rescheduling',
        paragraphs: [
          'Please review our Cancellation Policy for details on notice periods, fees, and refunds. That policy is incorporated into these Terms by reference.',
        ],
      },
      {
        heading: 'Customer responsibilities',
        paragraphs: ['To help us deliver quality service, you agree to:'],
        list: [
          'Secure valuables and fragile items before our arrival',
          'Inform us of pets, allergies, or areas that should not be cleaned',
          'Provide working utilities (water, electricity) as needed',
          'Notify us of any hazards, damage, or special instructions in advance',
        ],
      },
      {
        heading: 'Satisfaction and re-cleans',
        paragraphs: [
          'If you are not satisfied with an area we cleaned, notify us within 24 hours of service completion and we will work with you on a reasonable remedy, which may include a re-clean of the affected area, subject to verification.',
        ],
      },
      {
        heading: 'Limitation of liability',
        paragraphs: [
          'To the fullest extent permitted by law, Royal Glow Cleaning is not liable for indirect, incidental, or consequential damages. Our total liability for any claim relating to a service is limited to the amount paid for that specific service, except where prohibited by law.',
        ],
      },
      {
        heading: 'Website use',
        paragraphs: [
          'You may not misuse our website, attempt unauthorized access, or use our content for commercial purposes without permission. All website content is owned by Royal Glow Cleaning or its licensors.',
        ],
      },
      {
        heading: 'Governing law',
        paragraphs: [
          'These Terms are governed by the laws of the State of New Jersey, without regard to conflict-of-law principles.',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: [
          'Questions about these Terms? Email royalglowcleaning01@gmail.com or call (908) 733-6768.',
        ],
      },
    ],
  },
  cancellation: {
    slug: 'cancellation-policy',
    path: LEGAL_PATHS.cancellation,
    title: 'Cancellation Policy',
    description: 'Royal Glow Cleaning cancellation, rescheduling, and refund guidelines.',
    updated: 'September 22, 2025',
    sections: [
      {
        heading: 'Our goal',
        paragraphs: [
          'We understand plans change. This Cancellation Policy explains how to reschedule or cancel an appointment and any fees that may apply.',
        ],
      },
      {
        heading: 'Rescheduling',
        paragraphs: [
          'You may reschedule your appointment at no charge if you notify us at least 24 hours before your scheduled start time. We will do our best to accommodate your preferred new date based on crew availability.',
        ],
      },
      {
        heading: 'Cancellations',
        paragraphs: ['Cancellation notice requirements:'],
        list: [
          'More than 24 hours before service: no cancellation fee',
          'Less than 24 hours before service: a cancellation or trip fee may apply',
          'Same-day cancellation or no-show: up to 50% of the scheduled service fee may be charged',
        ],
      },
      {
        heading: 'How to cancel or reschedule',
        paragraphs: [
          'Contact us by phone at (908) 733-6768, email at royalglowcleaning01@gmail.com, or WhatsApp. Please include your name, service address, and original appointment time.',
        ],
      },
      {
        heading: 'Weather and emergencies',
        paragraphs: [
          'If severe weather or an emergency prevents safe travel or access, we may reschedule at no penalty to either party. We will contact you as soon as possible to arrange a new time.',
        ],
      },
      {
        heading: 'Refunds',
        paragraphs: [
          'If you prepaid for a service that we cancel or cannot perform, we will issue a full refund or apply the credit to a future booking, at your choice. Partial refunds for services already started are evaluated case by case.',
        ],
      },
      {
        heading: 'Recurring plans',
        paragraphs: [
          'For recurring cleaning plans, please provide at least 48 hours notice before skipping or canceling a scheduled visit unless otherwise agreed in writing. See our Subscription Terms for plan-specific details.',
        ],
      },
    ],
  },
  cookies: {
    slug: 'cookies-policy',
    path: LEGAL_PATHS.cookies,
    title: 'Cookies Policy',
    description: 'How Royal Glow Cleaning uses cookies and similar technologies on this website.',
    updated: 'September 22, 2025',
    sections: [
      {
        heading: 'What are cookies?',
        paragraphs: [
          'Cookies are small text files stored on your device when you visit a website. They help the site remember preferences, understand usage, and improve performance.',
        ],
      },
      {
        heading: 'How we use cookies',
        paragraphs: ['Our website may use cookies and similar technologies for:'],
        list: [
          'Essential site functionality and security',
          'Remembering form inputs or preferences during your visit',
          'Measuring traffic and understanding how visitors use our pages (analytics)',
          'Improving marketing effectiveness when advertising tools are enabled',
        ],
      },
      {
        heading: 'Types of cookies',
        paragraphs: ['We may use the following categories:'],
        list: [
          'Strictly necessary cookies — required for core site features',
          'Analytics cookies — help us understand visitor behavior in aggregate',
          'Functional cookies — remember choices you make on the site',
        ],
      },
      {
        heading: 'Managing cookies',
        paragraphs: [
          'You can control or delete cookies through your browser settings. Blocking certain cookies may affect how parts of the website work.',
          'To learn more about cookie management, visit your browser\'s help documentation.',
        ],
      },
      {
        heading: 'Third-party services',
        paragraphs: [
          'Some cookies may be set by third-party tools we use, such as analytics or embedded content providers. Those parties have their own privacy and cookie policies.',
        ],
      },
      {
        heading: 'Updates',
        paragraphs: [
          'We may update this Cookies Policy as our website evolves. Check the "Last updated" date above for the latest version.',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: [
          'Questions about cookies? Email royalglowcleaning01@gmail.com.',
        ],
      },
    ],
  },
  subscription: {
    slug: 'subscription-terms',
    path: LEGAL_PATHS.subscription,
    title: 'Subscription Terms',
    description: 'Terms for Royal Glow Cleaning recurring and subscription cleaning plans.',
    updated: 'September 22, 2025',
    sections: [
      {
        heading: 'Recurring service plans',
        paragraphs: [
          'Royal Glow Cleaning offers recurring cleaning plans (weekly, bi-weekly, or monthly) for customers who want consistent home maintenance. These Subscription Terms apply in addition to our general Terms & Conditions.',
        ],
      },
      {
        heading: 'Plan setup',
        paragraphs: [
          'Your plan frequency, service type, pricing, and preferred day/time window are confirmed before the first recurring visit. We recommend starting with a deep clean for new homes so recurring visits maintain a high baseline.',
        ],
      },
      {
        heading: 'Billing',
        paragraphs: [
          'Recurring plans are billed according to the schedule agreed at signup — typically per visit or on a monthly cycle. Prices may be adjusted with reasonable notice if service scope, home conditions, or operating costs change materially.',
        ],
      },
      {
        heading: 'Skipping or pausing',
        paragraphs: [
          'You may skip or pause visits with at least 48 hours notice before the scheduled appointment. Skipped visits outside this window may be subject to a fee. Extended pauses may require rebooking based on current availability and pricing.',
        ],
      },
      {
        heading: 'Cancelling a plan',
        paragraphs: [
          'You may cancel your recurring plan at any time by contacting us. Cancellation takes effect after any visits already scheduled within the notice period. Prepaid amounts for unused visits will be refunded or credited as applicable.',
        ],
      },
      {
        heading: 'Access and consistency',
        paragraphs: [
          'Recurring service requires reliable property access on your scheduled day. If access issues occur repeatedly, we may adjust your plan schedule or pause service until access is resolved.',
        ],
      },
      {
        heading: 'Service quality',
        paragraphs: [
          'We aim to assign consistent crews when possible. Substitute team members may occasionally be used to maintain your schedule. Please report any quality concerns within 24 hours so we can address them promptly.',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: [
          'To start, change, or cancel a subscription plan, call (908) 733-6768 or email royalglowcleaning01@gmail.com.',
        ],
      },
    ],
  },
}

export const ALL_LEGAL_PAGES = Object.values(LEGAL_PAGES)
