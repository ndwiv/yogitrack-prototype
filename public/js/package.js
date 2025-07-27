  let formMode = "search"; // Tracks the current mode of the form


  // Fetch all package IDs and populate the dropdown
  document.addEventListener("DOMContentLoaded", () => {
    initPackageDropdown();
    addPackageDropdownListener();
  });


async function initPackageDropdown() {
  const select = document.getElementById("packageIdSelect");
    
    try {
      const response = await (fetch("/api/package/ids"));
      const packageIds = await response.json();

      packageIds.forEach(pkg => {
        const option = document.createElement("option");
        option.value = pkg.packageId;
        option.textContent = `${pkg.packageId}: ${pkg.packageName}`;
        select.appendChild(option);
      });
    } catch (err) {
      console.error("Failed to load package IDs:", err);
    }
}

async function addPackageDropdownListener() {
  const form = document.getElementById("packageForm");
  const select = document.getElementById("packageIdSelect");

  select.addEventListener("change", async () => {

    var packageId = select.value.split(":")[0];
    try {
      const res = await fetch(`/api/package/getPackage?packageId=${packageId}`);
      if (!res.ok) throw new Error("Package search failed");

      const data = await res.json();
      console.log(data);
      if (!data || Object.keys(data).length === 0) {
        alert("No package found.");
        return;
      }

      //Fill form with data
      form.packageName.value = data.packageName || "";
      form.price.value = data.price || "";
      if (Array.from(packageId)[0] === 'S') {
        form.category[1].checked = true;
      } else {
        form.category[0].checked = true;
      }

    } catch (err) {
          alert(`Error searching package: ${packageId} - ${err.message}`);
        }
  });
}


function clearPackageForm() {
  const form = document.getElementById("packageForm");

  form.reset(); // Clears all inputs including text, textarea, and unchecks radio buttons
}