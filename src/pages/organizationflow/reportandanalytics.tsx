/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import PieTrendChart from "@/components/pages/applicationForm/reportandanalytics/piechart";
import ReportStatBar from "@/components/pages/applicationForm/reportandanalytics/statbar";
import ApplicationTrendsChart from "@/components/pages/applicationForm/reportandanalytics/trendchart";
import { Calendar, Kanban, UploadCloud } from "lucide-react";
import { useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getOrganizationApplicationStats } from "@/services/org/applications";
import showToast from "@/components/common/showtoast";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { RootState } from "@/redux/store";
import { ApplicationStatType } from "@/lib/types";

const ReportAndAnalytics = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const toast = useToast();

  const [providerStatData, setProviderStatData] =
    useState<ApplicationStatType | null>(null);

  const fetchStat = async () => {
    if (!user) return;

    try {
      const res = await getOrganizationApplicationStats(user?.id);
      if (res.success) {
        setProviderStatData(res?.data?.stats);
      }
    } catch (error: any) {
      console.log(error);
      showToast(
        toast,
        "Enroll AI",
        "error",
        `${error.message || "Failed to fetch Application Stats"}`
      );
    }
  };
  useEffect(() => {
    if (user && user?.accountType !== "provider") fetchStat();
  }, [user]);

  console.log(providerStatData);

  const [selectedDates, setSelectedDates] = useState<DateObject[]>([]);

  // Helper function to format the date range
  const formatSelectedDates = (dates: DateObject[]) => {
    if (dates.length === 0) return "";

    // Sort the dates array for proper range display
    const sortedDates = dates.sort(
      (a, b) => a.toDate().getTime() - b.toDate().getTime()
    );

    const formatDate = (date: DateObject) =>
      date.toDate().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });

    // Get the start and end date
    const startDate = formatDate(sortedDates[0]);
    const endDate = formatDate(sortedDates[sortedDates.length - 1]);

    return dates.length > 1 ? `${startDate} - ${endDate}` : startDate;
  };

  console.log(formatSelectedDates(selectedDates));

  return (
    <section className="flex space-y-9 mb-20 flex-col">
      <div className="flex lg:flex-row flex-col justify-between xl:items-center gap-4">
        <p className="font-semibold text-3xl">Report And Analytics</p>

        <div className="flex items-center gap-4">
          <div className="flex items-center bg-white p-2">
            <div className="">
              <Calendar size={17} />
            </div>
            <DatePicker
              value={selectedDates}
              onChange={(dates: DateObject[]) => setSelectedDates(dates)}
              multiple
              format="YYYY-MM-DD"
              style={{
                color: "black",
                paddingTop: 10,
                paddingBottom: 10,
                fontFamily: "raleway",
                paddingLeft: 8,
                width: "100%",
                border: 0,
                fontSize: "12px",
                fontWeight: 600,
                borderRadius: 20,
              }}
              placeholder="Selec Date Range"
            />
          </div>

          <div className="">
            <button className="flex items-center gap-2 raleway font-semibold text-sm bg-white py-3 px-5 rounded-lg ">
              Export
              <UploadCloud size={17} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full flex-1 space-y-9">
        <div className="">
          <ReportStatBar providerStatData={providerStatData} />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col   gap-8">
        <div
          style={{ flex: 2 }}
          className="flex flex-col rounded-xl gap-5 p-5 bg-white shadow-md "
        >
          <div className="flex items-center justify-between">
            <p className="text-base text-black raleway font-semibold">
              Application Trends
            </p>

            <div className="bg-[#f0f3fa] p-2 rounded-md ">
              <Kanban
                size={20}
                color="#0077b5"
                className="rotate-180 font-bold"
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex gap-2 items-center ">
              <p className="text-sm text-text-primary font-medium">
                Process Time
              </p>{" "}
              <div className="h-3.5 w-3.5 rounded bg-[#a66fd7] " />
            </div>
            <div className="flex gap-2 items-center ">
              <p className="text-sm text-text-primary font-medium">
                Approval Rates
              </p>{" "}
              <div className="h-3.5 w-3.5 rounded bg-[#6ad2ff] " />
            </div>
          </div>

          <div className=" lg:px-20">
            <ApplicationTrendsChart />
          </div>
        </div>
        <div className="flex flex-col flex-1 rounded-xl gap-1 p-5 bg-white shadow-md ">
          <div className="flex items-center justify-between">
            <p className="text-base text-black raleway font-semibold">
              Application Trends
            </p>

            <div className="bg-[#f0f3fa] p-2 rounded-md">
              <Kanban
                size={20}
                color="#0077b5"
                className="rotate-180 font-bold"
              />
            </div>
          </div>

          <div className="  ">
            <PieTrendChart providerStatData={providerStatData} />
          </div>

          <div className="p-3 shadow-xl px-8 justify-between rounded-xl flex">
            <div className="flex items-center flex-col space-y-1">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#0088FE] " />
                <p className="text-text-primary font-semibold text-xs">
                  Pending
                </p>
              </div>

              <p className="text-[#2b3674] font-bold plus-jakarta">
                {(
                  (Number(providerStatData?.pending) /
                    (Number(providerStatData?.pending) +
                      Number(providerStatData?.approved) +
                      Number(providerStatData?.declined))) *
                  100
                ).toFixed(2) || 0}{" "}
                %
              </p>
            </div>
            <div className="flex items-center flex-col space-y-1">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#00C49F] " />
                <p className="text-text-primary font-semibold text-xs">
                  Approved
                </p>
              </div>

              <p className="text-[#00C49F] font-bold plus-jakarta ">
                {(
                  (Number(providerStatData?.approved) /
                    (Number(providerStatData?.pending) +
                      Number(providerStatData?.approved) +
                      Number(providerStatData?.declined))) *
                  100
                ).toFixed(2) || 0}{" "}
                %
              </p>
            </div>
            <div className="flex items-center flex-col space-y-1">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#FF8042] " />
                <p className="text-text-primary font-semibold text-xs">
                  Declined
                </p>
              </div>

              <p className="text-[#FF8042] font-bold plus-jakarta ">
                {(
                  (Number(providerStatData?.declined) /
                    (Number(providerStatData?.pending) +
                      Number(providerStatData?.approved) +
                      Number(providerStatData?.declined))) *
                  100
                ).toFixed(2) || 0}{" "}
                %
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportAndAnalytics;
