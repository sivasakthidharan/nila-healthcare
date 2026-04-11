import { useState } from "react";
import {
  Briefcase,
  MapPin,
  Clock,
  CheckCircle,
  XCircle,
  Users,
  Filter,
  Search,
  ChevronDown,
  ExternalLink
} from "lucide-react";

export default function CareersPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Job listings data
  const jobs = [
    {
      id: 1,
      title: "Clinical Psychologist",
      type: "full-time",
      location: "Remote",
      status: "open",
      department: "Clinical",
      experience: "2+ years",
      postedDate: "2025-04-01",
      description: "Provide online therapy sessions, conduct assessments, and develop treatment plans for clients."
    },
    {
      id: 2,
      title: "Community Manager",
      type: "full-time",
      location: "Kozhikode, India",
      status: "filled",
      department: "Community",
      experience: "3+ years",
      postedDate: "2025-03-15",
      description: "Manage online communities, engage with users, and organize events."
    },
    {
      id: 3,
      title: "Remote Mental Health Counselor",
      type: "remote",
      location: "Remote",
      status: "open",
      department: "Clinical",
      experience: "1+ years",
      postedDate: "2025-04-05",
      description: "Conduct remote counseling sessions and support clients via video/chat."
    }
  ];

  // Filter jobs based on active tab and search
  const filteredJobs = jobs.filter(job => {
    const matchesTab = 
      activeTab === "all" ||
      (activeTab === "remote" && job.type === "remote") ||
      (activeTab === "full-time" && job.type === "full-time");
    
    const matchesSearch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesTab && matchesSearch;
  });

  const stats = {
    all: jobs.length,
    remote: jobs.filter(j => j.type === "remote").length,
    fullTime: jobs.filter(j => j.type === "full-time").length
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Help us make mental health care accessible to everyone. We're looking for passionate individuals to join our mission.
          </p>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Tabs */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                activeTab === "all"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All <span className="ml-1 text-sm">({stats.all})</span>
            </button>
            <button
              onClick={() => setActiveTab("remote")}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                activeTab === "remote"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Remote Job <span className="ml-1 text-sm">({stats.remote})</span>
            </button>
            <button
              onClick={() => setActiveTab("full-time")}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                activeTab === "full-time"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Full Time <span className="ml-1 text-sm">({stats.fullTime})</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="mt-6 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by job title, location, or department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Job Cards */}
        {filteredJobs.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center">
            <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">No jobs found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your filters or search term.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 border border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        job.status === "open" 
                          ? "bg-green-100 text-green-700" 
                          : "bg-gray-100 text-gray-500"
                      }`}>
                        {job.status === "open" ? "Open" : "Position filled"}
                      </span>
                      <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium capitalize">
                        {job.type}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>Posted {new Date(job.postedDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm">{job.description}</p>
                  </div>
                  
                  <div className="flex-shrink-0">
                    {job.status === "open" ? (
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-full transition-all flex items-center gap-2">
                        Apply Now <ExternalLink className="w-4 h-4" />
                      </button>
                    ) : (
                      <button disabled className="bg-gray-200 text-gray-500 font-medium px-6 py-2 rounded-full cursor-not-allowed">
                        Filled
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Join Community Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
          <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Don't see the right role?</h3>
          <p className="text-gray-600 mb-4">Join our talent community and be the first to know about new opportunities.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition-all">
            Join Community
          </button>
        </div>
      </section>
    </div>
  );
}