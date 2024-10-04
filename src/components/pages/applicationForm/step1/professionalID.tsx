import { ApplicationProps } from ".";

const ProfessionalID = ({
  form,
  handleChange,
  disableForm,
}: ApplicationProps) => {
  const { npi, tin, deacn, medicalCareId } = form;

  return (
    <div className="border rounded-lg pt-5 px-3 xl:px-5 pb-10 space-y-5">
      <p className="font-semibold text-base">Professional IDs</p>
      <div className="space-y-2">
        <div className="flex xl:flex-row flex-col justify-between gap-3">
          <div
            style={{ flex: 2 }}
            className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium"
          >
            <label htmlFor="npi">National Provider Identifier (NPI)</label>
            <input
              id="npi"
              name="npi"
              type="number"
              placeholder="National Provider Identifier (NPI)"
              value={npi}
              disabled={disableForm}
              onChange={handleChange}
              className="border rounded-md p-2 outline-[0.5px] outline-secondary"
            />
          </div>

          <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
            <label htmlFor="tin">Tax Identification Number (TIN)</label>
            <input
              id="tin"
              name="tin"
              type="text"
              placeholder="123-xxx-876"
              value={tin}
              disabled={disableForm}
              onChange={handleChange}
              className="border rounded-md p-2 outline-[0.5px] outline-secondary"
            />
          </div>

          <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
            <label htmlFor="medicalCareId">Medical Care ID </label>
            <input
              id="medicalCareId"
              name="medicalCareId"
              type="text"
              placeholder="ABC12563"
              value={medicalCareId}
              disabled={disableForm}
              onChange={handleChange}
              className="border rounded-md p-2 outline-[0.5px] outline-secondary"
            />
          </div>
          <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
            <label htmlFor="deacn">DEA Certificate Number</label>
            <input
              id="deacn"
              name="deacn"
              type="text"
              placeholder="AJ1234567"
              value={deacn}
              disabled={disableForm}
              onChange={handleChange}
              className="border rounded-md p-2 outline-[0.5px] outline-secondary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalID;
