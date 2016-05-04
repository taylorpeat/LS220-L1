function endsOf(beginning_arr, ending_arr) {
    return [beginning_arr[0], ending_arr[ending_arr.length - 1]];
}

endsOf([4, 8, 15], [16, 23, 42]); // Returns [4, 42]