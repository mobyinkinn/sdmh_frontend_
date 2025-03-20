import admission from "./assets/Admission.jpg";
import discharge from "./assets/Discharge.jpg";
import payment from "./assets/payment.jpg";
import registration from "./assets/registration_consultation.jpg";

export const careData = [
  {
    id: 0,
    title: "Registration / Consultation",
    img: registration,
    data: [
      "For consultation, patients are required to fill registration form at the Enquiry Desk in OPD Building or Emergency with their full particulars and the name of Consultant, whom they wish to consult. For patients unable to write, assistance is provided for filling the form at the counter.",
      "Online appointment can be taken for consultants giving prior appointment. Appointment can be sought though our website or our appointment helpline i.e. 70731-11911",
      "Please enter all details (name, age, phone number and address) as mentioned in the documents to avoid inconvenience, especially in case of medical reimbursement or for issuance of relevant certificates.",
      "A Unique Hospital Identification Number (UHID) is generated for new patient post submission of registration form and making payment. In case of revisit, it is requested that previous UHID number is mentioned by patient / attendant or their previous medical records are carried.",
    ],
    color: "#fff",
  },
  {
    id: 1,
    title: "Admission",
    img: admission,
    data: [
      "If consultant recommends admission of patient, it would be mentioned on the OPD sheet, which needs to be shown at Admission Counter placed in Emergency and IPD Building.",
      "The Hospital has different kinds of bed and room categories that patient/attendant can choose from. However, the allotment is subjected to availability on the date of admission. An advance of three days of accommodation charges shall need to be paid in advance while booking.",
      "Financial counseling & consent for admission is taken at time of admissions.",
      "On confirmation of bed/room availability, receptionist checks all papers and asks for mode of payment, i.e. cash/credit card/mediclaim/from empanelled organization. Admission is done accordingly.",
      "If patient is willing to avail Mediclaim facility for admission, the Mediclaim office will verify the approval / denial of the same.",
    ],
    color: "#f9f6f6",
  },
  {
    id: 2,
    title: "Discharge",
    img: discharge,
    data: [
      "The discharge process is initiated only after the patient's consultant deems him/her fit for discharge.",
      "Discharge timing is prior to 12:00 noon.",
      "Before leaving, the patient's attendant needs to check their room/ward bed carefully for any personal belongings, as the hospital is not liable for belongings left behind.",
      "Once discharged, doctor and nurse, dietician will explain the treatment plan that you need to follow.",
    ],
    color: "#f9f6f6",
  },
  {
    id: 3,
    title: "Payment Guidelines",
    img: payment,
    data: [
      "Hospital Charges are non-negotiable.",
      "Hospital Tariff is available at the OPD/IPD reception, enquiry counter and with Patient Welfare Officer.",
      "Please ensure that all doubts about the charges are clarified before admission at time of financial counseling.",
      "If the patient has to undergo an operation / procedure, the patient / attendant have to deposit the full amount prior to the operation procedure.",
      "Any shortage of initial deposit during emergency admissions has to be cleared within 24 hours of admission or before 12.00 noon of the next day.",
      "Provisional bills will be presented to attendant every 3rd day, the payment should ideally be cleared same day.",
    ],
    color: "#f9f6f6",
  },
];
