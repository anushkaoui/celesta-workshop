Phase 1: Registration Form (Frontend)
Personal Details
Full Name (required)
Email (required)
Mobile Number (required)
Institute/College (required)
City/State (required)
Workshop

Use a dropdown:

Workshop Applying For *

▼ Artificial Intelligence
▼ Ethical Hacking
▼ Drone Technology
▼ Full Stack Development
▼ Arduino Course
▼ Autonomous Robotics
▼ Generative AI
▼ Internet of Things
IIT Patna Student?
Are you an IIT Patna Student?

○ Yes
○ No

If Yes

Roll Number *

appears.

Accommodation

If IITP Student == No

Do you require accommodation?

○ Yes
○ No

If IITP Student == Yes

Hide this section completely, or display:

Accommodation
Not Required (IIT Patna students)
Phase 2: Live Fee Calculator

Don't make users calculate anything.

Display something like

Registration Summary

Workshop Fee             ₹1200
IITP Discount           -₹XXX
Accommodation            ₹YYY
GST                     ₹ZZZ

--------------------------
Final Amount            ₹1234

Whenever the user changes

IITP Student
Accommodation

the values should instantly update.

In React, this is simply derived state—not stored state.

Phase 3: Validation

Examples:

Email format
Mobile = 10 digits
Roll number required if IITP
Accommodation cannot be selected if IITP
Workshop required

Disable Submit until valid.

Phase 4: Payment

After Submit

↓

Create registration

↓

Open payment gateway

↓

Payment Success

↓

Save registration

↓

Generate Registration ID

↓

Confirmation page

Phase 5: Confirmation

After payment

Display

Registration Successful!

Registration ID:
WS2026-00152

Workshop:
Artificial Intelligence

Amount Paid:
₹1416

A confirmation email has been sent.
