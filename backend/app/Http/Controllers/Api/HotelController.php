<?php

namespace App\Http\Controllers\Api;

use App\Models\Hotel;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller;

class HotelController extends Controller
{
    /**
     * Get all hotels
     */
    public function index(): JsonResponse
    {
        $hotels = Hotel::orderBy('id', 'desc')->get();
        return response()->json($hotels);
    }

    /**
     * Create a new hotel
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'city' => 'required|string',
            'price' => 'required|integer',
            'shortDescription' => 'required|string',
            'description' => 'required|string',
            'images' => 'required|array',
        ]);

        $hotel = Hotel::create($validated);

        return response()->json($hotel, 201);
    }

    /**
     * Get a single hotel
     */
    public function show(Hotel $hotel): JsonResponse
    {
        return response()->json($hotel);
    }

    /**
     * Update a hotel
     */
    public function update(Request $request, Hotel $hotel): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'sometimes|string',
            'city' => 'sometimes|string',
            'price' => 'sometimes|integer',
            'shortDescription' => 'sometimes|string',
            'description' => 'sometimes|string',
            'images' => 'sometimes|array',
        ]);

        $hotel->update($validated);

        return response()->json($hotel);
    }

    /**
     * Delete a hotel
     */
    public function destroy(Hotel $hotel): JsonResponse
    {
        $hotel->delete();

        return response()->json(['success' => true]);
    }
}
