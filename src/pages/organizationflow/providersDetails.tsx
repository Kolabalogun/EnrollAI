/* eslint-disable react-hooks/exhaustive-deps */
import OrganizationApplicationLists from "@/components/pages/applications/organization";
import { ProviderAndApplications } from "@/lib/types";
import { RootState } from "@/redux/store";
import { formatDateTime } from "@/utils/formatDateTime";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const ProvidersDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.auth);

  const state = (JSON.parse(location.state) as ProviderAndApplications) || null;
  console.log(state);

  useEffect(() => {
    if (!state) navigate(-1);
  }, [state]);

  return (
    <section className="flex space-y-9 mb-20 flex-col">
      <div className="flex lg:flex-row flex-col justify-between xl:items-center gap-4">
        <p className="font-semibold text-3xl">Provider Details</p>
      </div>

      <div className="p-5 rounded-lg bg-white space-y-5 shadow">
        <p className="font-semibold text-xl">Provider Informations</p>

        <section className="bg-white rounded-lg shadow flex-1 h-full w-full flex flex-col px-5 py-5 pb-20 space-y-12">
          <div className="flex xl:flex-row flex-col gap-4 xl:items-center justify-between">
            <div className="flex gap-5 items-center">
              <img
                src={
                  state?.provider?.profilePicture ||
                  `https://eu.ui-avatars.com/api/?name=${state?.provider?.fullName}&size=200`
                }
                className="h-24 w-24 rounded-full"
                alt="profile picture"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex xl:flex-row flex-col justify-between gap-8">
              <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
                <label className="font-semibold" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  id="fullName"
                  placeholder="Full Name"
                  readOnly
                  value={state?.provider?.fullName}
                  className="border rounded-md px-3 py-4 outline-[0.5px] outline-secondary"
                />
              </div>

              <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
                <label className="font-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  readOnly
                  placeholder="Email Address"
                  value={state?.provider?.email}
                  className="border rounded-md px-3 py-4 outline-[0.5px] outline-secondary"
                />
              </div>
            </div>
            {user?.accountType === "super_admin" && (
              <div className="flex xl:flex-row flex-col justify-between gap-8">
                <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
                  <label className="font-semibold" htmlFor=" Joined At">
                    Joined At
                  </label>
                  <input
                    id=" Joined At"
                    placeholder=" Joined At"
                    readOnly
                    value={formatDateTime(state?.provider?.createdAt)}
                    className="border rounded-md px-3 py-4 outline-[0.5px] outline-secondary"
                  />
                </div>

                <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
                  <label className="font-semibold" htmlFor="professionalTitle">
                    Professional Title
                  </label>
                  <input
                    id="professionalTitle"
                    readOnly
                    placeholder="professionalTitle "
                    value={state?.provider?.professionalTitle}
                    className="border rounded-md px-3 py-4 outline-[0.5px] outline-secondary"
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
      <div className="p-5 rounded-lg bg-white space-y-5 shadow">
        <p className="font-semibold text-xl">Applications</p>

        <section className="bg-white rounded-lg shadow flex-1 h-full w-full flex flex-col px-5 py-5 pb-20 space-y-12">
          <OrganizationApplicationLists
            title="Approved Applications"
            data={state?.applications || []}
            fetchFunction={() => console.log("")}
            currentPage={1}
            setCurrentPage={() => console.log("")}
            totalPages={1}
          />
        </section>
      </div>
    </section>
  );
};

export default ProvidersDetails;
