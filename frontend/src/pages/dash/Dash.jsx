import React, { useState } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  UserIcon,
  ClipboardDocumentListIcon,
  PhoneIcon,
  UsersIcon,
  ChartPieIcon,
  ChevronDownIcon, ChevronUpIcon,
  UserPlusIcon,
  ArrowLeftOnRectangleIcon
} from "@heroicons/react/24/outline";
import SmallCard from "../../components/card/SmallCard";
import image from "../../assets/roqya.jpg";
import Patients from "../../components/Patients/Patients";
import AddPatientForm from "../../components/AddPatientForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPersonals } from "../../redux/personnel";
import { getPatients } from "../../redux/patients";
import { AddPersonelForm } from "../../components";
import UserLogin from "../../components/UserLogin";
import { disconnectAssitant } from "../../redux/connexion";
import { useNavigate } from "react-router-dom";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];
const userNavigation = [
  { name: "Centre", href: "#" },
  // { name: "Settings", href: "#" },
  { name: "Déconnexion", href: "#" },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const RakisItem = ({ raki }) => {
  return (
    <div className="
        text-gray-800 text-left my-1 w-full 
        border-2 border-gray p-1 
        rounded-md hover:bg-gray-800 
        hover:text-white
        ">
      <h3 className="font-semibold"> {raki.nom} </h3>
      <h3 className="text-sm font-medium"> {raki.contact} </h3>
    </div>
  )
}


function Dash() {


  const [stat, setStat] = useState(false);

  const [showRakis, setshowRakis] = useState(false);

  const GetPerdispatch = useDispatch();
  const GetPatdispatch = useDispatch();

  const personnels = useSelector(state => state.personels);

  const navigate = useNavigate()

  const isDashLogged = useSelector(state => state.login.assitantConx);
  
  const userInfos = JSON.parse(localStorage.getItem('userInfos'));

  useEffect(() => {
    GetPerdispatch(getPersonals());
    GetPatdispatch(getPatients())

  }, [])



  return (
    <div className="min-h-full">

      {!userInfos && isDashLogged === false ? <UserLogin /> : null}

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal bg-white-100 backdrop-blur-sm">
        <div className="modal-box w-11/12 max-w-5xl ">
          <AddPatientForm closePop="" />
        </div>
      </div>

      <input type="checkbox" id="new-personel" className="modal-toggle" />
      <div className="modal bg-white-100 backdrop-blur-sm">
        <div className="modal-box w-4/12 max-w-5xl ">
          <h2 className="text-medium font-bold">Ajouter un personel</h2>
          <AddPersonelForm closePop="" />
        </div>
      </div>

      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-8 rounded-lg"
                      src={image}
                      alt=""
                    />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      <a className="flex bg-gray-900 text-white text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                        <UsersIcon className="h-6 w-6" />
                        <span> Patients </span>
                      </a>
                      <a
                        onClick={() => setStat(!stat)}
                        className="flex bg-gray-900 text-white text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                      >
                        <ChartPieIcon className="h-6 w-6" />
                        <span> Statistiques </span>
                      </a>
                      <a
                        className=" flex bg-gray-900 text-white text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                      >
                        <UserIcon className="h-6 w-6" />
                        <label className='show-patient' htmlFor="my-modal" >Nouveau Patient</label>

                      </a>
                      <a
                        className=" flex bg-gray-900 text-white text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                      >
                        <UserPlusIcon className="h-6 w-6" />
                        <label className='show-patient' htmlFor="new-personel" >Nouveau Personel</label>

                      </a>
                      <a
                        className=" flex bg-gray-900 w-15 h-15 text-white text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-full text-sm font-medium cursor-pointer"
                      >
                        <UserPlusIcon className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <button
                      type="button"
                      className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={user.imageUrl}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute text-left right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="text-sm font-semibold"><a>Modifier le centre</a></li>
                            <li
                             onClick={() =>{
                              localStorage.removeItem('centreInfo')
                              localStorage.removeItem('userInfos');
                              navigate('/')

                             }}
                            className="text-sm font-semibold"><a>Déconnecter le centre?</a></li>
                          </ul>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="border-t border-gray-700 pt-4 pb-3">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">
                      {user.name}
                    </div>
                    <div className="text-sm font-medium leading-none text-gray-400">
                      {user.email}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 space-y-1 px-2">

                  {/* <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    {item.name}
                  </Disclosure.Button> */}

                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <main className="relative">
        <div className="absolute z-10 top-0 left-0 w-full shadow bg-white-100 backdrop-blur-sm sm:px-6 lg:px-8">
          {stat ? (
            <div className="flex justify-center gap-2 stat w-full ">
              <SmallCard title="Hommes" />
              <SmallCard title="Femmes" />
              <SmallCard title="Enfants" />
              <SmallCard title="Musulmans" />
              <SmallCard title="Chrétiens" />
              <SmallCard title="Animistres" />
            </div>
          ) : null}
        </div>
        <div className="grid  grid-cols-[200px_minmax(600px,_1fr)_300px] pt-8 ">
          <div className="h-[90vh] ">
            <div className="h-48 ml-1 bg-gray-800 text-white rounded-md border-solid border-2 px-4 w-full">
              <div className="w-[45px] mt-2 h-[45px] overflow-hidden border-solid border-2 rounded-full">
                <img src={user.imageUrl} alt="" />
              </div>
              <div className="flex mt-2">
                <UserIcon className="h-6 w-6" />
                <p className="ml-2 text-xs font-semibold">{userInfos?.nom} {userInfos?.prenom} </p>
              </div>
              <div className="flex mt-2">
                <PhoneIcon className="h-6 w-6" />
                <p className="ml-2 text-xs font-semibold">{userInfos?.contact}</p>
              </div>
              <div className="flex mt-2">
                <ClipboardDocumentListIcon className="h-6 w-6" />
                <p className="ml-2 text-xs font-semibold">{userInfos?.typeEmploye} {userInfos?.id} </p>
              </div>
              <div className="flex mt-2">
                <ArrowLeftOnRectangleIcon className="h-6 w-6" />
                <p
                  onClick={() => {
                    localStorage.removeItem('userInfos')
                    GetPerdispatch(disconnectAssitant(false))
                  }}
                  className="ml-2 text-xs font-semibold cursor-pointer">Déconnexion</p>
              </div>
            </div>
          </div>
          <div className="px-4 ">
            <Patients />
          </div>
          <div className=" bg-gray-800 w-68 h-[65%] p-2 text-white rounded-md mx-2 ">

            <h3 className="font-semibold text-left text-sm">Sécrétaire active</h3>

            <div className="flex items-center gap-2">
              <div className="w-[45px] mt-2 h-[45px] overflow-hidden border-solid border-2 rounded-full">
                <img src={user.imageUrl} className="" alt="" />
              </div>
              <h3 className="font-semibold text-xs"> Fatima wara</h3>
            </div>

            <h3 className="font-semibold mt-3 text-left text-sm">Rakis du centre</h3>
            <div className="w-full h-8 mt-2 bg-white  rounded-full flex justify-between items-center">
              <div className="w-8 h-8 rounded-full bg-gray-800 border-2 border-white">

              </div>
              {!showRakis ? <ChevronDownIcon
                onClick={() => setshowRakis(!showRakis)}
                className="w-6 p-1 h-6 text-gray-800 rounded-full cursor-pointer m-2"
              />
                :
                <ChevronUpIcon
                  onClick={() => setshowRakis(!showRakis)}
                  className="w-6 p-1 h-6 text-gray-800 rounded-full cursor-pointer m-2"
                />}
            </div>
            {showRakis ? <div className="w-full h-60 mt-2 bg-white  p-1 rounded-md ">
              {/* local component */}
              {
                personnels.filter(raki => raki.typeEmploye === "raki")
                  .map((personnel, index) => <RakisItem raki={personnel} key={index} />)
              }


            </div> : null}

          </div>
        </div>
      </main>
    </div>
  );
}

export default Dash;
