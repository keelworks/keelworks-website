import { useState } from "react";
import FormDropdown from "../../../Components/FormDropdown/FormDropdown";
import Checkbox from "../../../Components/Checkbox/Checkbox";
import { FaCirclePlus } from "react-icons/fa6";

const SignUp = () => {
  const initDaysCheckboxState = {
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  };

  const positionOptions = [
    {
      value: "",
      label:
        "Please select the volunteer position you are interested in applying for",
      isDisabled: true,
    },
    {
      value: "marketingBrandingSpecialist",
      label: "Marketing/Branding Specialist",
    },
    {
      value: "designerDevelopmentSpecialist",
      label: "Instructional Designer/Learning and Development Specialist",
    },
    {
      value: "fundraisingGrantAcquisitionAssociate",
      label:
        "Fundraising/Grant Acquisition Associate (Experience in Writing Proposals and Grants Required)",
    },
    { value: "graphicArtist", label: "Graphic Artist" },
    { value: "humanResourceSpecialist", label: "Human Resource Specialist" },
    { value: "editorWriter", label: "Editor/Writer" },
    { value: "contentWriter", label: "Content Writer" },
    { value: "boardMember", label: "Board Member" },
    {
      value: "projectManager",
      label: "Project Manager (PMP Certification Required)",
    },
    { value: "communicationsDirector", label: "Director of Communications" },
    { value: "executiveAssistant", label: "Executive Assistant" },
    {
      value: "attorney",
      label: "Attorney (Specialization in Patent/Copyright Law)",
    },
  ];

  const workingHourOptions = [
    {
      value: "",
      label: "How many hours are you available to volunteer during the week?",
      isDisabled: true,
    },
    // {
    //   value: "1to5hours",
    //   label: "1 to 5 hours",
    // },
    {
      value: "5to10hours",
      label: "5 to 10 hours",
    },
    {
      value: "10to20hours",
      label: "10 to 20 Hours",
    },
    {
      value: "morethan20hours",
      label: "More than 20 hours",
    },
  ];

  const refRelationshipOptions = [
    {
      value: "",
      label: "Relationship to Reference",
      isDisabled: true,
    },
    {
      value: "SupervisorOrManager",
      label: "Supervisor/Manager",
    },
    {
      value: "ColleagueOrCo-worker",
      label: "Colleague/Co-worker",
    },
    {
      value: "TeacherOrProfessor",
      label: "Teacher/Professor",
    },
    {
      value: "Classmate",
      label: "Classmate",
    },
    {
      value: "Friend",
      label: "Friend",
    },
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [volunteerPosition, setVolunteerPosition] = useState(null);
  const [briefInfo, setBriefInfo] = useState("");
  const [skillsAndExperience, setSkillsAndExperience] = useState("");
  // const [volunteerExperience, setVolunteerExperience] = useState("");
  // const [whyKeelworks, setWhyKeelworks] = useState("");
  // const [goalOrExpectation, setGoalOrExpectation] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const [daysCheckbox, setDaysCheckbox] = useState(initDaysCheckboxState);
  const [workingHours, setWorkingHours] = useState(null);

  const [references, setReferences] = useState([]);

  const handleDaysCheckbox = (event) => {
    const { name, checked } = event.target;
    setDaysCheckbox((prevCheckboxes) => ({
      ...prevCheckboxes,
      [name]: checked,
    }));
  };

  const handleVolunteerPosition = (option) => {
    setVolunteerPosition(option);
  };

  const handleWorkingHours = (option) => {
    setWorkingHours(option);
  };

  const handleAddReferenceClick = (e) => {
    e.preventDefault();

    if (references.length < 2) {
      setReferences([
        ...references,
        {
          refFirstName: "",
          refLastName: "",
          refEmail: "",
          refContactNo: "",
          refCity: "",
          refState: "",
          refCountry: "",
          relationshipToRef: null,
        },
      ]);
    }
  };

  const handleRemoveReferenceClick = (index, e) => {
    e.preventDefault();
    const newReferences = references.filter((_, i) => i !== index);
    setReferences(newReferences);
  };

  const handleRefInputChange = (index, field, value) => {
    const newReferences = references.map((reference, i) =>
      i === index ? { ...reference, [field]: value } : reference
    );
    setReferences(newReferences);
  };

  const filterCheckboxes = (data) => {
    const trueCheckboxes = Object.keys(data.daysCheckbox)
      .filter((key) => data.daysCheckbox[key])
      .join(", ");

    const volunteerPositionLabel = data.volunteerPosition?.label;

    const workingHoursLabel = data.workingHours?.label;

    const flattenedReferences = {};
    data.references.forEach((reference, index) => {
      const referenceNumber = index + 1;
      Object.keys(reference).forEach((key) => {
        if (key === "relationshipToRef") {
          flattenedReferences[
            `reference${referenceNumber}${
              key.charAt(0).toUpperCase() + key.slice(1)
            }`
          ] = reference[key]?.label;
        } else {
          flattenedReferences[
            `reference${referenceNumber}${
              key.charAt(0).toUpperCase() + key.slice(1)
            }`
          ] = reference[key];
        }
      });
    });

    return {
      ...data,
      daysCheckbox: trueCheckboxes,
      volunteerPosition: volunteerPositionLabel,
      workingHours: workingHoursLabel,
      ...flattenedReferences,
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const isAnyDayChecked = Object.values(daysCheckbox).some((value) => value);
    if (!isAnyDayChecked) {
      alert(
        "Please select at least one day when you are available to volunteer."
      );
    } else {
      const userInput = {
        firstName,
        lastName,
        email,
        contactNo,
        city,
        state,
        country,
        volunteerPosition,
        briefInfo,
        skillsAndExperience,
        // volunteerExperience,
        whyKeelworks,
        goalOrExpectation,
        additionalInfo,
        daysCheckbox,
        workingHours,
        references,
      };

      const filteredData = filterCheckboxes(userInput);

      console.log(filteredData);

      // const data = new FormData();
      // data.append("First Name", filteredData.firstName);
      // data.append("Last Name", filteredData.lastName);
      // data.append("Email", filteredData.email);
      // data.append("Contact No", filteredData.contactNo);
      // data.append("City", filteredData.city);
      // data.append("State", filteredData.state);
      // data.append("Country", filteredData.country);
      // data.append("Volunteer Position", filteredData.volunteerPosition);
      // data.append("Brief Info", filteredData.briefInfo);
      // data.append("Skills And Experience", filteredData.skillsAndExperience);
      // data.append("Volunteer Experience", filteredData.volunteerExperience);
      // data.append("Why Keelworks", filteredData.whyKeelworks);
      // data.append("Goal Or Expectation", filteredData.goalOrExpectation);
      // data.append("Additional Info", filteredData.additionalInfo);
      // data.append("Working Days", filteredData.daysCheckbox);
      // data.append("Working Hours", filteredData.workingHours);

      // /*----------------Append References in Request Payload------------*/

      // data.append(
      //   "Reference 1 First Name",
      //   filteredData.reference1RefFirstName ?? " "
      // );
      // data.append(
      //   "Reference 1 Last Name",
      //   filteredData.reference1RefLastName ?? " "
      // );
      // data.append("Reference 1 Email", filteredData.reference1RefEmail ?? " ");
      // data.append(
      //   "Reference 1 Contact No",
      //   filteredData.reference1RefContactNo ?? " "
      // );
      // data.append("Reference 1 City", filteredData.reference1RefCity ?? " ");
      // data.append("Reference 1 State", filteredData.reference1RefState ?? " ");
      // data.append(
      //   "Reference 1 Country",
      //   filteredData.reference1RefCountry ?? " "
      // );
      // data.append(
      //   "Reference 1 Relationship",
      //   filteredData.reference1RelationshipToRef ?? " "
      // );

      // data.append(
      //   "Reference 2 First Name",
      //   filteredData.reference2RefFirstName ?? " "
      // );
      // data.append(
      //   "Reference 2 Last Name",
      //   filteredData.reference2RefLastName ?? " "
      // );
      // data.append("Reference 2 Email", filteredData.reference2RefEmail ?? " ");
      // data.append(
      //   "Reference 2 Contact No",
      //   filteredData.reference2RefContactNo ?? " "
      // );
      // data.append("Reference 2 City", filteredData.reference2RefCity ?? " ");
      // data.append("Reference 2 State", filteredData.reference2RefState ?? " ");
      // data.append(
      //   "Reference 2 Country",
      //   filteredData.reference2RefCountry ?? " "
      // );
      // data.append(
      //   "Reference 2 Relationship",
      //   filteredData.reference2RelationshipToRef ?? " "
      // );

      /*----------------Append References in Request Payload------------*/

      // **************** (Not Using the FormData) sending data as JSON format to back-end ****************
      const localAPI = "http://localhost:5500/api/v1/signup/";
      const keelWorksAPI = "http://keelWorksBack-end/api/v1/signup/";

      const response = await fetch(localAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filteredData),
        muteHttpExceptions: true,
      });

      if (response.ok) {
        setFirstName("");
        setLastName("");
        setEmail("");
        setContactNo("");
        setCity("");
        setState("");
        setCountry("");
        setVolunteerPosition(null);
        setWorkingHours(null);
        setBriefInfo("");
        setSkillsAndExperience("");
        // setVolunteerExperience("");
        // setWhyKeelworks("");
        // setGoalOrExpectation("");
        setAdditionalInfo("");
        setDaysCheckbox(initDaysCheckboxState);
        setTermsAndConditions(false);
        setReferences([]);

        alert(
          "Your message was sent successfully! Thank you for the application. We’ll analyze your information and come back to you as soon as possible."
        );
      } else {
        alert("There was an error sending your message.");
      }

      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-screen h-full md:min-h-[650px] md:mt-[5rem] lg:px-5 bg-white flex justify-center">
      <div className="w-full max-w-[3000px] h-full flex flex-col items-start md:items-center justify-center font-bold">
        <div className="max-w-[1100px] mx-[1rem] md:mx-[2rem] lg:mx-[8rem]">
          <h2 className="text-[2rem] md:text-[3.5rem] lg:text-5xl md:text-center my-[2rem]">
            Volunteer Sign-Up & Needs
          </h2>
          <form className="space-y-4 mt-2" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
              <div>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className="block w-full px-3 py-3 font-normal bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm placeholder:italic placeholder:text-gray-500"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className="block w-full px-3 py-3 font-normal bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm placeholder:italic placeholder:text-gray-500"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="block w-full px-3 py-3 font-normal bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm placeholder:italic placeholder:text-gray-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  id="contactNo"
                  placeholder="Phone Number"
                  className="block w-full px-3 py-3 font-normal bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm placeholder:italic placeholder:text-gray-500"
                  value={contactNo}
                  onChange={(e) => setContactNo(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-5">
              <div>
                <input
                  type="text"
                  id="city"
                  placeholder="City"
                  className="block w-full px-3 py-3 font-normal bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm placeholder:italic placeholder:text-gray-500"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  id="state"
                  placeholder="State"
                  className="block w-full px-3 py-3 font-normal bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm placeholder:italic placeholder:text-gray-500"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  id="country"
                  placeholder="Country"
                  className="block w-full px-3 py-3 font-normal bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm placeholder:italic placeholder:text-gray-500"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                />
              </div>
            </div>

            <FormDropdown
              options={positionOptions}
              value={volunteerPosition}
              onChange={handleVolunteerPosition}
              placeholder="Please select the volunteer position you are interested in applying for"
              required={true}
            />

            <div>
              <textarea
                id="briefInfo"
                placeholder="Briefly describe the experience related to the position you selected"
                className="block w-full px-3 py-3 font-normal bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm placeholder:italic placeholder:text-gray-500"
                rows="auto"
                value={briefInfo}
                onChange={(e) => setBriefInfo(e.target.value)}
              ></textarea>
            </div>
            <div>
              <textarea
                id="skillsAndExperience"
                placeholder="What specific skills and experiences do you have that are relevant to the position(s) you selected?"
                className="block w-full px-3 py-3 font-normal bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm placeholder:italic placeholder:text-gray-500"
                rows="auto"
                value={skillsAndExperience}
                onChange={(e) => setSkillsAndExperience(e.target.value)}
                required
              ></textarea>
            </div>
            {/* <div>
              <textarea
                id="volunteerExperience"
                placeholder="Have you volunteered with other organizations? If so, please describe your role(s)."
                className="block w-full px-3 py-3 font-normal bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm placeholder:italic placeholder:text-gray-500"
                rows="auto"
                value={volunteerExperience}
                onChange={(e) => setVolunteerExperience(e.target.value)}
              ></textarea>
            </div> */}

            <FormDropdown
              options={workingHourOptions}
              value={workingHours}
              onChange={handleWorkingHours}
              placeholder="How many hours are you available to volunteer during the week?"
              required={true}
            />

            <div>
              <p className="mt-3 mb-2 text-sm font-light">
                What days are you available to volunteer?
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                <Checkbox
                  name="monday"
                  checked={daysCheckbox.monday}
                  onChange={handleDaysCheckbox}
                  label="Monday"
                />

                <Checkbox
                  name="tuesday"
                  checked={daysCheckbox.tuesday}
                  onChange={handleDaysCheckbox}
                  label="Tuesday"
                />

                <Checkbox
                  name="wednesday"
                  checked={daysCheckbox.wednesday}
                  onChange={handleDaysCheckbox}
                  label="Wednesday"
                />

                <Checkbox
                  name="thursday"
                  checked={daysCheckbox.thursday}
                  onChange={handleDaysCheckbox}
                  label="Thursday"
                />

                <Checkbox
                  name="friday"
                  checked={daysCheckbox.friday}
                  onChange={handleDaysCheckbox}
                  label="Friday"
                />

                <Checkbox
                  name="saturday"
                  checked={daysCheckbox.saturday}
                  onChange={handleDaysCheckbox}
                  label="Saturday"
                />

                <Checkbox
                  name="sunday"
                  checked={daysCheckbox.sunday}
                  onChange={handleDaysCheckbox}
                  label="Sunday"
                />
              </div>
            </div>

            {/* <div>
              <textarea
                id="whyKeelworks"
                placeholder="Why do you want to volunteer with the KeelWorks Foundation?"
                className="block w-full px-3 py-3 font-normal bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm placeholder:italic placeholder:text-gray-500"
                rows="auto"
                value={whyKeelworks}
                onChange={(e) => setWhyKeelworks(e.target.value)}
                required
              ></textarea>
            </div> */}

            {/* <div>
              <textarea
                id="goalOrExpectation"
                placeholder="Do you have any specific goals or expectation as a volunteer experience?"
                className="block w-full px-3 py-3 font-normal bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm placeholder:italic placeholder:text-gray-500"
                rows="auto"
                value={goalOrExpectation}
                onChange={(e) => setGoalOrExpectation(e.target.value)}
              ></textarea>
            </div> */}

            <div>
              <textarea
                id="additionalInfo"
                placeholder="Please provide any additional information that you believe would be helpful in considering your application:"
                className="block w-full px-3 py-3 font-normal bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm placeholder:italic placeholder:text-gray-500"
                rows="auto"
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
              ></textarea>
            </div>

            {references.map((ref, index) => (
              <div key={index}>
                <p className="mt-5 text-sm font-light">Reference {index + 1}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  <div>
                    <input
                      type="text"
                      id="refFirstName"
                      placeholder="First Name"
                      className="block w-full px-3 py-3 font-normal bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm placeholder:italic placeholder:text-gray-500"
                      value={ref.refFirstName}
                      onChange={(e) =>
                        handleRefInputChange(
                          index,
                          "refFirstName",
                          e.target.value
                        )
                      }
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="refLastName"
                      placeholder="Last Name"
                      className="block w-full px-3 py-3 font-normal bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm placeholder:italic placeholder:text-gray-500"
                      value={ref.refLastName}
                      onChange={(e) =>
                        handleRefInputChange(
                          index,
                          "refLastName",
                          e.target.value
                        )
                      }
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      id="refEmail"
                      placeholder="Email"
                      className="block w-full px-3 py-3 font-normal bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm placeholder:italic placeholder:text-gray-500"
                      value={ref.refEmail}
                      onChange={(e) =>
                        handleRefInputChange(index, "refEmail", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      id="refContactNo"
                      placeholder="Phone Number"
                      className="block w-full px-3 py-3 font-normal bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm placeholder:italic placeholder:text-gray-500"
                      value={ref.refContactNo}
                      onChange={(e) =>
                        handleRefInputChange(
                          index,
                          "refContactNo",
                          e.target.value
                        )
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-5">
                  <div>
                    <input
                      type="text"
                      id="refCity"
                      placeholder="City"
                      className="block w-full px-3 py-3 font-normal bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm placeholder:italic placeholder:text-gray-500"
                      value={ref.refCity}
                      onChange={(e) =>
                        handleRefInputChange(index, "refCity", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="refState"
                      placeholder="State"
                      className="block w-full px-3 py-3 font-normal bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm placeholder:italic placeholder:text-gray-500"
                      value={ref.refState}
                      onChange={(e) =>
                        handleRefInputChange(index, "refState", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="refCountry"
                      placeholder="Country"
                      className="block w-full px-3 py-3 font-normal bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm placeholder:italic placeholder:text-gray-500"
                      value={ref.refCountry}
                      onChange={(e) =>
                        handleRefInputChange(
                          index,
                          "refCountry",
                          e.target.value
                        )
                      }
                      required
                    />
                  </div>
                </div>

                <div className="my-4">
                  <FormDropdown
                    id="relationshipToRef"
                    options={refRelationshipOptions}
                    value={ref.relationshipToRef}
                    onChange={(e) =>
                      handleRefInputChange(index, "relationshipToRef", e)
                    }
                    placeholder="Relationship to Reference"
                    required={true}
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    className="font-semibold text-red-500"
                    onClick={(e) => handleRemoveReferenceClick(index, e)}
                  >
                    Remove Reference
                  </button>
                </div>
              </div>
            ))}

            {references.length < 2 && (
              <div>
                <button
                  className="font-semibold"
                  onClick={(e) => handleAddReferenceClick(e)}
                >
                  Add Reference
                  <FaCirclePlus className="inline ml-1 text-primary500" />
                </button>
              </div>
            )}

            <div>
              <label className="inline-flex items-start mt-10">
                <input
                  type="checkbox"
                  className="peer relative appearance-none h-7 w-7 min-w-7 min-h-7 rounded-sm bg-gray-200 checked:bg-gray-500 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnIGZpbGw9IiNmZmZmZmYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4Ij4KICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxnIGZpbGw9IiNlNWU3ZWIiPgogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPgogICAgICAgIDxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4=')] after:bg-[length:70px] after:bg-center after:bg-no-repeat"
                  name="termsAndConditions"
                  checked={termsAndConditions}
                  onChange={(e) => setTermsAndConditions(e.target.checked)}
                  required
                />
                <span className="ml-2 text-md font-light">
                  By submitting this application, I affirm that the facts set
                  forth are true and complete. I understand that if I am
                  accepted as a volunteer, any false statements, omissions, or
                  other misrepresentations made by me on this application may
                  result in my immediate dismissal.
                </span>
              </label>
            </div>
            <div className="flex justify-center lg:justify-start">
              <button
                className="block mt-7 mb-[4rem] w-[297px] h-[76px] bg-primary500 rounded-full hover:bg-primary300 transition duration-[300ms] ease-linear text-[1rem] text-white font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
