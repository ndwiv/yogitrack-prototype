document.getElementById("searchBtn").addEventListener("click", async () => {
      const form = document.getElementById("instructorForm");
      const firstname = form.firstname.value.trim();
      const phone = form.phone.value.trim();
      const email = form.email.value.trim();

      // Construct query parameters
      const params = new URLSearchParams();
      if (firstname) params.append("firstname", firstname);
      if (phone) params.append("phone", phone);
      if (email) params.append("email", email);

      if (!params.toString()) {
        alert("Please enter First Name to search.");
        return;
      }

      try {
        const res = await fetch(`/api/instructor/search?${params.toString()}`);
        if (!res.ok) throw new Error("Search failed");

        const data = await res.json();
        if (!data || Object.keys(data).length === 0) {
          alert("No instructor found.");
          return;
        }

        // Fill form with data
        form.instructorId.value = data.instructorId || "";
        form.firstname.value = data.firstname || "";
        form.lastname.value = data.lastname || "";
        form.address.value = data.address || "";
        form.phone.value = data.phone || "";
        form.email.value = data.email || "";

        if (data.preferredContact === "phone") {
          form.pref[0].checked = true;
        } else if (data.preferredContact === "email") {
          form.pref[1].checked = true;
        }

      } catch (err) {
        alert(`Error searching instructor: ${form.firstname.value} - ${err.message}`);
      }
    });


document.getElementById("addBtn").addEventListener("click", async () => {
    const form = document.getElementById("instructorForm");
    const instructorData = {
        instructorId: form.instructorId.value.trim(),
        firstname : form.firstname.value.trim(),
        lastname: form.lastname.value.trim(),
        address: form.address.value.trim(),
        phone: form.phone.value.trim(),
        email: form.email.value.trim(),
        preferredContact: form.pref[0].checked ? "phone" : "email"
    }
    try {
    const res = await fetch("/api/instructor/add", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(instructorData)

    });

    const result = await res.json();
      if (!res.ok) throw new Error(result.message || "Failed to add instructor");

      alert("✅ Instructor added successfully!");
      form.reset();
    } catch (err) {
      alert("❌ Error: " + err.message);
    }
  });

function clearInstructorForm() {
  const form = document.getElementById("instructorForm");

  form.reset(); // Clears all inputs including text, textarea, and unchecks radio buttons
}
