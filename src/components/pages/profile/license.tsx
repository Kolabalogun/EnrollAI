import { ApplicationProps } from "../applicationForm/step1";

const License = ({ form, handleChange }: ApplicationProps) => {
  const {
    certificate1Institution,
    certificate1Degree,
    certificate1YOG,

    certificate2Institution,
    certificate2Degree,
    certificate2YOG,

    certificate3Institution,
    certificate3Degree,
    certificate3YOG,

    license1Institution,
    license1Degree,
    license1YOG,

    license2Institution,
    license2Degree,
    license2YOG,

    license3Institution,
    license3Degree,
    license3YOG,
  } = form;

  return (
    <div className="  pb-10 space-y-5">
      <div className="space-y-10 ">
        <div className="flex flex-1 gap-10">
          <div className="flex flex-col flex-1 gap-6">
            <p className="font-semibold  ">Certificate 1</p>
            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label
                className=" font-semibold "
                htmlFor="certificate1Institution"
              >
                Institution
              </label>
              <input
                id="certificate1Institution"
                name="certificate1Institution"
                type="text"
                placeholder="Cardiologist, Cleveland Clinic"
                value={certificate1Institution}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>
            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label className=" font-semibold " htmlFor="certificate1Degree">
                Degree
              </label>
              <input
                id="certificate1Degree"
                name="certificate1Degree"
                type="text"
                placeholder="Interventional Cardiology"
                value={certificate1Degree}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label className=" font-semibold " htmlFor="certificate1YOG">
                Year of Graduation
              </label>
              <input
                id="certificate1YOG"
                name="certificate1YOG"
                type="number"
                placeholder="2000"
                value={certificate1YOG}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-6">
            <p className="font-semibold  ">Certificate 2</p>
            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label
                className=" font-semibold "
                htmlFor="certificate2Institution"
              >
                Institution
              </label>
              <input
                id="certificate2Institution"
                name="certificate2Institution"
                type="text"
                placeholder="Cardiologist, Cleveland Clinic"
                value={certificate2Institution}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>
            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label className=" font-semibold " htmlFor="certificate2Degree">
                Degree
              </label>
              <input
                id="certificate2Degree"
                name="certificate2Degree"
                type="text"
                placeholder="Interventional Cardiology"
                value={certificate2Degree}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label className=" font-semibold " htmlFor="certificate2YOG">
                Year of Graduation
              </label>
              <input
                id="certificate2YOG"
                name="certificate2YOG"
                type="number"
                placeholder="2000"
                value={certificate2YOG}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-6">
            <p className="font-semibold  ">Certificate 3</p>
            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label
                className=" font-semibold "
                htmlFor="certificate3Institution"
              >
                Institution
              </label>
              <input
                id="certificate3Institution"
                name="certificate3Institution"
                type="text"
                placeholder="Cardiologist, Cleveland Clinic"
                value={certificate3Institution}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>
            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label className=" font-semibold " htmlFor="certificate3Degree">
                Degree
              </label>
              <input
                id="certificate3Degree"
                name="certificate3Degree"
                type="text"
                placeholder="Interventional Cardiology"
                value={certificate3Degree}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label className=" font-semibold " htmlFor="certificate3YOG">
                Year of Graduation
              </label>
              <input
                id="certificate3YOG"
                name="certificate3YOG"
                type="number"
                placeholder="2000"
                value={certificate3YOG}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-1 gap-10">
          <div className="flex flex-col flex-1 gap-6">
            <p className="font-semibold  ">License 1</p>
            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label className=" font-semibold " htmlFor="license1Institution">
                Institution
              </label>
              <input
                id="license1Institution"
                name="license1Institution"
                type="text"
                placeholder="Cardiologist, Cleveland Clinic"
                value={license1Institution}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>
            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label className=" font-semibold " htmlFor="license1Degree">
                Degree
              </label>
              <input
                id="license1Degree"
                name="license1Degree"
                type="text"
                placeholder="Interventional Cardiology"
                value={license1Degree}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label className=" font-semibold " htmlFor="license1YOG">
                Year of Graduation
              </label>
              <input
                id="license1YOG"
                name="license1YOG"
                type="number"
                placeholder="2000"
                value={license1YOG}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-6">
            <p className="font-semibold  ">License 2</p>
            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label className=" font-semibold " htmlFor="license2Institution">
                Institution
              </label>
              <input
                id="license2Institution"
                name="license2Institution"
                type="text"
                placeholder="Cardiologist, Cleveland Clinic"
                value={license2Institution}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>
            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label className=" font-semibold " htmlFor="license2Degree">
                Degree
              </label>
              <input
                id="license2Degree"
                name="license2Degree"
                type="text"
                placeholder="Interventional Cardiology"
                value={license2Degree}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label className=" font-semibold " htmlFor="license2YOG">
                Year of Graduation
              </label>
              <input
                id="license2YOG"
                name="license2YOG"
                type="number"
                placeholder="2000"
                value={license2YOG}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-6">
            <p className="font-semibold  ">License 3</p>
            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label className=" font-semibold " htmlFor="license3Institution">
                Institution
              </label>
              <input
                id="license3Institution"
                name="license3Institution"
                type="text"
                placeholder="Cardiologist, Cleveland Clinic"
                value={license3Institution}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>
            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label className=" font-semibold " htmlFor="license3Degree">
                Degree
              </label>
              <input
                id="license3Degree"
                name="license3Degree"
                type="text"
                placeholder="Interventional Cardiology"
                value={license3Degree}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>

            <div className="raleway text-xs flex w-full flex-1 flex-col gap-2  font-medium">
              <label className=" font-semibold " htmlFor="license3YOG">
                Year of Graduation
              </label>
              <input
                id="license3YOG"
                name="license3YOG"
                type="number"
                placeholder="2000"
                value={license3YOG}
                onChange={handleChange}
                className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default License;
