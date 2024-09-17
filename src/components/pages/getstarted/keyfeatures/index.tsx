import PointChecks from "../checks";

const ExploreKeyFeatures = ({ tab }: { tab: number }) => {
  return (
    <section className="flex flex-col w-[600px] gap-10">
      {tab ? (
        <p className="text-base text-[#475467] raleway font-semibold">
          {tab === 1
            ? "Why Connect?"
            : tab === 3
            ? "What’s next?"
            : "How it Works:"}
        </p>
      ) : (
        ""
      )}
      <PointChecks
        title={
          tab === 1
            ? "Access Verified Data:"
            : tab === 2
            ? "Login to CAQH ProView:"
            : tab === 3
            ? "Start a New Application:"
            : "Pre-Filled Applications:"
        }
        desc={
          tab === 1
            ? "Automatically fetch your up-to-date professional details directly from CAQH ProView."
            : tab === 2
            ? "Enter your CAQH ProView credentials on the next screen."
            : tab === 3
            ? "Use your linked data to begin a new application instantly."
            : "Save time by letting our AI auto-fill your forms using verified data from your CAQH ProView profile."
        }
      />
      <PointChecks
        title={
          tab === 1
            ? "Reduce Errors:"
            : tab === 2
            ? "Authorize Access:"
            : tab === 3
            ? "Review and Edit:"
            : "Real-Time Tracking:"
        }
        desc={
          tab === 1
            ? "Ensure accuracy by using data that’s already validated and trusted."
            : tab === 2
            ? "Grant permission for our app to securely access your data."
            : tab === 3
            ? "Double-check the pre-filled information and make any necessary edits."
            : "Monitor the progress of your applications and receive instant updates."
        }
      />
      <PointChecks
        title={
          tab === 1
            ? "Speed Up the Process:"
            : tab === 2
            ? "Link Accounts:"
            : tab === 3
            ? "Submit with Confidence:"
            : "Secure Data Handling:"
        }
        desc={
          tab === 1
            ? "Spend less time on paperwork and more on what really matters."
            : tab === 2
            ? "Confirm that your CAQH ProView account is now linked and ready to use."
            : tab === 3
            ? "Submit your completed application knowing it’s accurate and up-to-date."
            : "We prioritize your privacy. Your data is handled securely and purged after use."
        }
      />
    </section>
  );
};

export default ExploreKeyFeatures;
