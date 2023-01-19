import React from "react";

function Filtrer() {
  return (
    <form action="/search" class="w-full md:w-2/3 shadow p-5 rounded-lg bg-white block mx-auto mt-10">
      <div class="relative">
        <div class="absolute flex items-center ml-2 h-full">
          <svg
            class="w-4 h-4 fill-current text-primary-gray-dark"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"></path>
          </svg>
        </div>

        <input
          type="text"
          name="s"
          placeholder="Search here..."
          class="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
        />
      </div>

      <div>
        <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
          <select name="type" class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
            <option value="">All Type</option>
            <option value="Vente">Vente</option>
            <option value="Location">Location</option>
            <option value="Location vacance">Location vacance</option>
          </select>

          <select name="wilaya" class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
            <option value="">ALL Wilayas</option>
          </select>

          <div class="relative">
            <input
              name="start"
              type="date"
              class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="Select date start"
            />
          </div>
          <div class="relative">
            <input
              name="end"
              type="date"
              class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="Select date end"
            />
          </div>
        </div>
      </div>

      <div class="grid md:flex grid-cols-2 justify-end space-x-4 w-full mt-6">
        <button class="px-4 py-2 rounded-lg text-stone-50 bg-stone-400 hover:bg-stone-500 font-bold text-white shadow-lg shadow-stone-200 transition ease-in-out duration-200 translate-10">
          Reset
        </button>

        <button class="px-4 py-2 rounded-lg text-orange-50 bg-theme-orange hover:bg-theme-orange font-bold text-white shadow-lg shadow-theme-orange transition ease-in-out duration-200 translate-10">
          Search
        </button>
      </div>
    </form>
  );
}

export default Filtrer;
