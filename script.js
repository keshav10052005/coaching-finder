const coachingData = [

    {
        name: "Matrix Academy",
        state: "Rajasthan",
        district: "Sikar",
        exams: ["JEE", "NEET"],
        fees: null,
        rating: 4.5,
        reviews: 2345,
        ratingSource: "Local listing",
        courses: "JEE Main & Advanced, NEET",
        hostel: "Not verified",
        location: "Piprali Road, Sikar",
        website: "https://www.matrixedu.in/",
        verified: true
    },

    {
        name: "CLC Sikar",
        state: "Rajasthan",
        district: "Sikar",
        exams: ["JEE", "NEET"],
        fees: null,
        rating: 4.2,
        reviews: 2901,
        ratingSource: "Local listing",
        courses: "JEE, NEET, Foundation",
        hostel: "Not verified",
        location: "Piprali Road, Sikar",
        website: "https://www.clcsikar.com/",
        verified: true
    },

    {
        name: "Gurukripa Career Institute",
        state: "Rajasthan",
        district: "Sikar",
        exams: ["JEE", "NEET"],
        fees: null,
        rating: 4.8,
        reviews: 1152,
        ratingSource: "Local listing",
        courses: "JEE Main & Advanced, NEET, Foundation",
        hostel: "Not verified",
        location: "Piprali Road, Sikar",
        website: "https://gurukripa.ac.in/",
        verified: true
    },

    {
        name: "ALLEN Career Institute - Sikar",
        state: "Rajasthan",
        district: "Sikar",
        exams: ["JEE", "NEET"],
        fees: null,
        rating: 4.3,
        reviews: 1070,
        ratingSource: "Local listing",
        courses: "JEE Main & Advanced, NEET, Foundation",
        hostel: "Not verified",
        location: "Piprali Road, Sikar",
        website: "https://www.allen.ac.in/sikar/",
        verified: true
    },

    {
        name: "Aakash Institute - Sikar",
        state: "Rajasthan",
        district: "Sikar",
        exams: ["JEE", "NEET"],
        fees: null,
        rating: 4.7,
        reviews: 327,
        ratingSource: "Local listing",
        courses: "JEE, NEET, Foundation",
        hostel: "Not verified",
        location: "Piprali Road, Sikar",
        website: "https://www.aakash.ac.in/",
        verified: true
    },

    {
        name: "Kautilya IIT-JEE Academy",
        state: "Rajasthan",
        district: "Sikar",
        exams: ["JEE"],
        fees: null,
        rating: 4.7,
        reviews: 633,
        ratingSource: "Local listing",
        courses: "IIT-JEE",
        hostel: "Not verified",
        location: "Piprali Road, Sikar",
        website: "",
        verified: true
    },

    {
        name: "Navjeevan NEET Academy",
        state: "Rajasthan",
        district: "Sikar",
        exams: ["NEET"],
        fees: null,
        rating: 4.7,
        reviews: 25,
        ratingSource: "Local listing",
        courses: "NEET",
        hostel: "Not verified",
        location: "Piprali Road, Sikar",
        website: "https://navjeevanschoolsikar.com/",
        verified: true
    },

    {
        name: "Path Career Institute",
        state: "Rajasthan",
        district: "Sikar",
        exams: ["NEET"],
        fees: null,
        rating: 4.8,
        reviews: 90,
        ratingSource: "Local listing",
        courses: "NEET, Foundation",
        hostel: "Not verified",
        location: "JK Heights, Piprali Road, Sikar",
        website: "https://www.pathcareerinstitute.com/",
        verified: true
    },

    {
        name: "Sri Chaitanya Academy Sikar",
        state: "Rajasthan",
        district: "Sikar",
        exams: ["JEE", "NEET"],
        fees: null,
        rating: 4.2,
        reviews: 54,
        ratingSource: "Local listing",
        courses: "JEE, NEET",
        hostel: "Not verified",
        location: "Shree Ganesh Tower, Piprali Road, Sikar",
        website: "https://www.srichaitanyaacademy.net/",
        verified: true
    },

    {
        name: "Physics Wallah Vidyapeeth Sikar",
        state: "Rajasthan",
        district: "Sikar",
        exams: ["JEE", "NEET"],
        fees: null,
        rating: 4.9,
        reviews: 458,
        ratingSource: "Local listing",
        courses: "JEE, NEET, Foundation",
        hostel: "Not verified",
        location: "Vishwakarma Apartment, Piprali Road, Sikar",
        website: "https://www.pw.live/",
        verified: true
    },

    {
        name: "PCP Sikar - Piprali Road",
        state: "Rajasthan",
        district: "Sikar",
        exams: ["JEE", "NEET"],
        fees: null,
        rating: 4.6,
        reviews: 761,
        ratingSource: "Local listing",
        courses: "JEE, NEET",
        hostel: "Not verified",
        location: "Elenza Heights, Piprali Road, Sikar",
        website: "",
        verified: true
    }

];

let currentResults = [];


function findCoaching() {

    const state =
        document.getElementById("state").value;

    const district =
        document.getElementById("district").value;

    const exam =
        document.getElementById("exam").value;


    currentResults = coachingData.filter(function(coaching) {

        return coaching.state === state &&
               coaching.district === district &&
               coaching.exams.includes(exam);

    });


    displayResults(currentResults);


    document.getElementById("results").scrollIntoView({
        behavior: "smooth"
    });

}



function displayResults(data) {

    const list =
        document.getElementById("coaching-list");

    const message =
        document.getElementById("result-message");


    if (data.length === 0) {

        message.innerHTML =
            "No matching coaching institutes found for your selected requirements.";

        list.innerHTML = "";

        return;
    }


    message.innerHTML =
        "<b>" + data.length +
        "</b> coaching option(s) found.";


    list.innerHTML = "";


    data.forEach(function(coaching, index) {

        const card =
            document.createElement("div");

        card.className =
            "coaching-card";


        let feeText = "Contact institute";


        if (coaching.fees !== null) {

            feeText =
                "₹" +
                coaching.fees.toLocaleString("en-IN") +
                " / year";

        }


        card.innerHTML = `

            <div class="card-top">

                <div>

                    <h3>${coaching.name}</h3>

                    <p class="card-info">
                        📍 ${coaching.location}
                    </p>

                </div>

                <div class="rating">
                    ⭐ ${coaching.rating}
                </div>

            </div>


            <p class="card-info">
                📚 ${coaching.courses}
            </p>


            <p class="card-info">
                🏠 Hostel: ${coaching.hostel}
            </p>


            <div class="fee">
                ${feeText}
            </div>


            <div class="tags">

                ${coaching.exams.map(function(exam) {

                    return `
                        <span class="tag">
                            ${exam}
                        </span>
                    `;

                }).join("")}

            </div>


            <div class="card-buttons">

                <button
                    class="details-btn"
                    onclick="showDetails(${index})">

                    View Details

                </button>


                <button
                    class="compare-btn"
                    onclick="compareCoaching(${index})">

                    Compare

                </button>

            </div>

        `;


        list.appendChild(card);

    });

}



function showDetails(index) {

    const coaching =
        currentResults[index];


    document.getElementById("modal-content").innerHTML = `

        <h2>${coaching.name}</h2>

        <p class="card-info">
            📍 ${coaching.location}
        </p>

        <p>
            ⭐ Rating: <b>${coaching.rating}</b>
        </p>

        <p>
            📚 Courses: ${coaching.courses}
        </p>

        <p>
            🏠 Hostel: ${coaching.hostel}
        </p>

        <p>
            💰 Fees: Contact institute
        </p>

        <br>

        <p>
            ${coaching.description}
        </p>

        <br>

        <p>
            <a href="${coaching.website}"
               target="_blank">
                Visit Official Website →
            </a>
        </p>

    `;


    document.getElementById("modal").style.display = "flex";

}



function closeModal() {

    document.getElementById("modal").style.display =
        "none";

}



function compareCoaching(index) {

    const coaching =
        currentResults[index];


    alert(
        "Added to comparison:\n\n" +
        coaching.name
    );

}



function sortResults() {

    const sort =
        document.getElementById("sort").value;


    if (sort === "rating") {

        currentResults.sort(function(a, b) {

            return b.rating - a.rating;

        });

    }


    displayResults(currentResults);

}