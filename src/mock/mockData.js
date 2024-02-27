import { Typography } from "@mui/material";
import { actionRequiredDetailsFunction, actionRequiredTitle, createData, decisionOne, decisionThree, decisionTwo, errorDetailsFunction, expiredStatusTag, expiredStatusTitle, expiredTag, insightsFour, insightsOne, insightsThree, insightsTwo, needsReviewTitle, notVerifiedTitle, verifiedTitle } from "../core/helper";

export const userData = {
  1: {
    appID: "SMBct8hXPjGfd8",
    name: "Joshua Smith",
    date: "Jan 01, 2023 05:15 pm CST",
    progress: "Send Verification Email",
    tag: expiredTag,
    error: "Expired",
    activeStep: 'Send Verification Email',
    statusTag: expiredStatusTag,
    status: {
        title: expiredStatusTitle,
        details: null
    },
    activityLog: [
      createData('Jan 01, 2023 05:15 pm CST', 'Individual Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 01, 2023 05:16 pm CST', 'Income Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 01, 2023 05:17 pm CST', 'Employment Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 01, 2023 05:18 pm CST', 'Loan Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 01, 2023 05:45 pm CST', 'Consumer Insights', 'Called API', '200', 'Successful'),
      createData('Jan 04, 2023 05:55 pm CST', 'Send Verification Email', 'Called API', '200', 'Successful'),
    ],
    userID: 1,
  },
  2: {
    appID: "SMBDt9hMRlGlq0",
    name: "Tiffany Sandford",
    date: "Jan 08, 2023 06:00 am CST",
    progress: "Phone Verification",
    tag: expiredTag,
    error: "Expired",
    activeStep: 'Multi-factor Authentication',
    statusTag: expiredStatusTag,
    status: {
        title: expiredStatusTitle,
        details: null
    },
    activityLog: [
      createData('Jan 08, 2023 06:00 am CST', 'Individual Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 08, 2023 06:05 am CST', 'Income Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 08, 2023 06:10 am CST', 'Employment Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 08, 2023 06:20 am CST', 'Loan Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 08, 2023 06:30 am CST', 'Consumer Insights', 'Called API', '200', 'Successful'),
      createData('Jan 08, 2023 06:40 am CST', 'Send Verification Email', 'Called API', '200', 'Successful'),
      createData('Jan 08, 2023 06:50 am CST', 'Multi-factor Authentication', 'Called API', '200', 'Successful'),
    ],
    userID: 2,
  },
  3: {
    appID: "SMBht2hHPgDfk9",
    name: "Annet Catero",
    date: "Jan 20, 2023 09:10 pm CST",
    progress: "Document Verification",
    tag: expiredTag,
    error: "Expired",
    activeStep: 'Document Verification',
    statusTag: expiredStatusTag,
    status: {
        title: expiredStatusTitle,
        details: null
    },
    activityLog: [
      createData('Jan 08, 2023 06:00 am CST', 'Individual Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 08, 2023 06:05 am CST', 'Income Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 08, 2023 06:10 am CST', 'Employment Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 08, 2023 06:20 am CST', 'Loan Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 08, 2023 06:30 am CST', 'Consumer Insights', 'Called API', '200', 'Successful'),
      createData('Jan 08, 2023 06:40 am CST', 'Send Verification Email', 'Called API', '200', 'Successful'),
      createData('Jan 08, 2023 06:50 am CST', 'Multi-factor Authentication', 'Called API', '200', 'Successful'),
      createData('Jan 08, 2023 07:55 am CST', 'Document Verification', 'Called API', '200', 'Successful'),
    ],
    userID: 3,
  },
  4: {
    appID: "SMBnt5hBPqVfs1",
    name: "Joshua Smith",
    date: "Feb 02, 2023 07:15 am CST",
    progress: "Bank Verification",
    tag: expiredTag,
    error: "Expired",
    activeStep: 'Bank Verification',
    statusTag: expiredStatusTag,
    status: {
        title: expiredStatusTitle,
        details: null
    },
    activityLog: [
      createData('Feb 02, 2023 07:15 am CST', 'Individual Information', 'Clicked Next', '200', 'Successful'),
      createData('Feb 02, 2023 07:20 am CST', 'Income Information', 'Clicked Next', '200', 'Successful'),
      createData('Feb 02, 2023 07:25 am CST', 'Employment Information', 'Clicked Next', '200', 'Successful'),
      createData('Feb 02, 2023 07:30 am CST', 'Loan Information', 'Clicked Next', '200', 'Successful'),
      createData('Feb 02, 2023 07:35 am CST', 'Consumer Insights', 'Called API', '200', 'Successful'),
      createData('Feb 02, 2023 07:40 am CST', 'Send Verification Email', 'Called API', '200', 'Successful'),
      createData('Feb 02, 2023 07:45 am CST', 'Multi-factor Authentication', 'Called API', '200', 'Successful'),
      createData('Feb 02, 2023 07:55 am CST', 'Document Verification', 'Called API', '200', 'Successful'),
      createData('Feb 02, 2023 08:15 am CST', 'Bank Verification', 'Called API', '200', 'Successful'),
    ],
    userID: 4,
  },
  5: {
    appID: "SMKct8hXPjQfd8",
    name: "Annet Catero",
    date: "Jan 23, 2023 04:15 pm CST",
    progress: "Employment Information 1 of 1",
    tag: (
      <Typography
        component={"div"}
        sx={{
          background: "#174fe2c7",
          color: "white",
          borderRadius: 1,
          p: 0.5,
          fontSize: "12px",
        }}
      >
        INTAKE FORM
      </Typography>
    ),
    activeStep: 'Employment Information',
    statusTag: <span style={{background: '#174fe2c7', color: 'white', borderRadius: 3, padding: 2, fontSize: '12px'}}>INTAKE FORM</span>,
    status: {
      title: actionRequiredTitle,
      details: actionRequiredDetailsFunction('Loan Information')
    },
    activityLog: [
      createData('Jan 23, 2023 04:15 pm CST', 'Individual Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 23, 2023 04:25 pm CST', 'Income Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 23, 2023 04:35 pm CST', 'Employment Information', 'Clicked Next', '200', 'Successful'),
    ],
    userID: 5,
  },
  6: {
    appID: "SMJDt9hMRlElq0",
    name: "Tiffany Sandford",
    date: "Jan 27, 2023 02:20 am CST",
    progress: "Consumer Insights",
    tag: (
      <Typography
        component={"div"}
        sx={{
          background: "#9f00b5cc",
          color: "white",
          borderRadius: 1,
          p: 0.5,
          fontSize: "12px",
        }}
      >
        INSIGHTS
      </Typography>
    ),
    activeStep: 'Consumer Insights',
    statusTag: <span style={{background: '#9f00b5cc', color: 'white', borderRadius: 3, padding: 2, fontSize: '12px'}}>INSIGHTS</span>,
    status: {
      title: actionRequiredTitle,
      details: actionRequiredDetailsFunction('Send Verification Email')
    },
    activityLog: [
      createData('Jan 27, 2023 02:20 am CST', 'Individual Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 27, 2023 02:25 am CST', 'Income Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 27, 2023 02:30 am CST', 'Employment Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 27, 2023 02:35 am CST', 'Loan Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 27, 2023 02:40 am CST', 'Consumer Insights', 'Called API', '200', 'Successful'),
    ],
    userID: 6,
  },
  7: {
    appID: "SMXht2hHPgTfk9",
    name: "Joshua Smith",
    date: "Jan 28, 2023 10:10 pm CST",
    progress: "Bank Verification",
    tag: (
      <Typography
        component={"div"}
        sx={{
          background: "#00b0b5",
          color: "white",
          borderRadius: 1,
          p: 0.5,
          fontSize: "12px",
        }}
      >
        VERIFICATION
      </Typography>
    ),
    activeStep: 'Bank Verification',
    statusTag: <span style={{background: '#00b0b5', color: 'white', borderRadius: 3, padding: 2, fontSize: '12px'}}>VERIFICATION</span>,
    status: {
      title: actionRequiredTitle,
      details: actionRequiredDetailsFunction('Income Insights')
    },
    activityLog: [
      createData('Jan 28, 2023 10:10 pm CST', 'Individual Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 28, 2023 10:14 pm CST', 'Income Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 28, 2023 10:16 pm CST', 'Employment Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 28, 2023 10:20 pm CST', 'Loan Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 28, 2023 10:50 pm CST', 'Consumer Insights', 'Called API', '200', 'Successful'),
      createData('Jan 28, 2023 11:10 pm CST', 'Send Verification Email', 'Called API', '200', 'Successful'),
      createData('Jan 28, 2023 11:14 pm CST', 'Multi-factor Authentication', 'Called API', '200', 'Successful'),
      createData('Jan 28, 2023 11:20 pm CST', 'Document Verification', 'Called API', '200', 'Successful'),
      createData('Jan 28, 2023 11:24 pm CST', 'Bank Verification', 'Called API', '200', 'Successful'),
    ],
    userID: 7,
  },
  8: {
    appID: "SMBct8hXPjGfd8",
    name: "Tiffany Sandford",
    date: "Jan 05, 2023 03:51 pm CST",
    insights: insightsOne,
    decision: decisionThree,
    activeStep: 'Income Insights',
    status: {
      title: notVerifiedTitle,
      details: errorDetailsFunction('SSN Not Verified', '[Refer: FID-SSNCHK-MISMATCH]', 'Jan 05, 2023 04:11 pm CST')
    },
    activityLog: [
      createData('Jan 05, 2023 03:52 pm CST', 'Individual Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 05, 2023 03:54 pm CST', 'Income Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 05, 2023 03:58 pm CST', 'Employment Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 05, 2023 04:01 pm CST', 'Loan Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 05, 2023 04:11 pm CST', 'Consumer Insights', 'Called API', '200', 'SSN Not Verified'),
      createData('Jan 05, 2023 04:31 pm CST', 'Send Verification Email', 'Called API', '200', 'Successful'),
      createData('Jan 05, 2023 04:50 pm CST', 'Multi-factor Authentication', 'Called API', '200', 'Successful'),
      createData('Jan 05, 2023 06:11 pm CST', 'Document Verification', 'Called API', '200', 'Successful'),
      createData('Jan 05, 2023 06:12 pm CST', 'Bank Verification', 'Called API', '200', 'Successful'),
      createData('Jan 05, 2023 06:15 pm CST', 'Income Insights', 'Called API', '200', 'Successful'),
    ],
    userID: 8,
  },
  9: {
    appID: "SMBDt9hMRlGlq0",
    name: "Joshua Smith",
    date: "Jan 10, 2023 04:27 am CST",
    insights: insightsTwo,
    decision: decisionTwo,
    activeStep: 'Income Insights',
    status: {
      title: verifiedTitle,
      details: null
    },
    activityLog: [
      createData('Jan 10, 2023 04:27 am CST', 'Individual Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 10, 2023 04:28 am CST', 'Income Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 10, 2023 04:30 am CST', 'Employment Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 10, 2023 04:32 am CST', 'Loan Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 10, 2023 04:38 am CST', 'Consumer Insights', 'Called API', '200', 'Successful'),
      createData('Jan 10, 2023 04:40 am CST', 'Send Verification Email', 'Called API', '200', 'Successful'),
      createData('Jan 10, 2023 04:42 am CST', 'Multi-factor Authentication', 'Called API', '200', 'Successful'),
      createData('Jan 10, 2023 04:46 am CST', 'Document Verification', 'Called API', '200', 'Successful'),
      createData('Jan 10, 2023 04:54 am CST', 'Bank Verification', 'Called API', '200', 'Successful'),
      createData('Jan 10, 2023 04:58 am CST', 'Income Insights', 'Called API', '200', 'Successful'),
    ],
    userID: 9,
  },
  10: {
    appID: "SMBht2hHPgDfk9",
    name: "Annet Catero",
    date: "Jan 13, 2023 06:31 pm CST",
    insights: insightsThree,
    decision: decisionOne,
    activeStep: 'Income Insights',
    status: {
      title: needsReviewTitle,
      details: errorDetailsFunction('SSN Not Verified', 'FID-SSNCHK-MISMATCH', 'Jan 14, 2023 06:31 pm CST')
    },
    activityLog: [
      createData('Jan 13, 2023 06:31 pm CST', 'Individual Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 13, 2023 06:32 pm CST', 'Income Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 13, 2023 06:34 pm CST', 'Employment Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 13, 2023 06:37 pm CST', 'Loan Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 13, 2023 06:39 pm CST', 'Consumer Insights', 'Called API', '200', 'Not Verified'),
      createData('Jan 13, 2023 06:40 pm CST', 'Send Verification Email', 'Called API', '200', 'Successful'),
      createData('Jan 13, 2023 06:45 pm CST', 'Multi-factor Authentication', 'Called API', '200', 'Successful'),
      createData('Jan 13, 2023 06:48 pm CST', 'Document Verification', 'Called API', '200', 'Successful'),
      createData('Jan 13, 2023 06:51 pm CST', 'Bank Verification', 'Called API', '200', 'Successful'),
      createData('Jan 13, 2023 06:59 pm CST', 'Income Insights', 'Called API', '200', 'Successful'),
    ],
    userID: 10,
  },
  11: {
    appID: "SMBnt5hBPqVfs1",
    name: "Tiffany Sandford",
    date: "Jan 17, 2023 07:15 am CST",
    insights: insightsFour,
    decision: decisionOne,
    activeStep: 'Income Insights',
    status: {
      title: needsReviewTitle,
      details: errorDetailsFunction('Name and address canot be verified', 'FID-MATCHASSMNT-0', 'Jan 17, 2023 06:31 pm CST')
    },
    activityLog: [
      createData('Jan 17, 2023 07:15 am CST', 'Individual Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 17, 2023 07:17 am CST', 'Income Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 17, 2023 07:19 am CST', 'Employment Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 17, 2023 07:25 am CST', 'Loan Information', 'Clicked Next', '200', 'Successful'),
      createData('Jan 17, 2023 07:28 am CST', 'Consumer Insights', 'Called API', '200', 'Not Verified'),
      createData('Jan 17, 2023 07:35 am CST', 'Send Verification Email', 'Called API', '200', 'Successful'),
      createData('Jan 17, 2023 07:37 am CST', 'Multi-factor Authentication', 'Called API', '200', 'Successful'),
      createData('Jan 17, 2023 07:39 am CST', 'Document Verification', 'Called API', '200', 'Successful'),
      createData('Jan 17, 2023 07:42 am CST', 'Bank Verification', 'Called API', '200', 'Successful'),
      createData('Jan 17, 2023 07:45 am CST', 'Income Insights', 'Called API', '200', 'Not Verified'),
    ],
    userID: 11,
  },
};