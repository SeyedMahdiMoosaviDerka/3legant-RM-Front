import { useState, useEffect, useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AccountNav from "./AccountNav";
import MainContainer from "../../ui/MainContainer";

export default function Account() {
  const account = useMemo(
    () => [
      { title: "Dashboard", to: "dashboard" },
      { title: "Address", to: "address" },
      { title: "Orders", to: "orders" },
      { title: "Wishlist", to: "wishlist" },
    ],
    []
  );

  const location = useLocation();
  const [pageTitle, setPageTitle] = useState(account[0].title);

  useEffect(() => {
    const currentAccount = account.find(
      (acc) => acc.to && location.pathname.endsWith(acc.to)
    );
    if (currentAccount) {
      setPageTitle(currentAccount.title);
    }
  }, [location, account]);

  return (
    <MainContainer>
      <div className="grid grid-cols-[1fr_3fr] gap-x-4">
        <h2 className="col-span-2 text-center text-4xl font-semibold mt-20 py-16">
          {pageTitle}
        </h2>

        <div className="border-2 bg-neutral-03 px-4 flex flex-col rounded-md h-[450px]">
          <AccountNav account={account} setPageTitle={setPageTitle} />
        </div>

        <div className="pl-10">
          <Outlet />
        </div>
      </div>
    </MainContainer>
  );
}
