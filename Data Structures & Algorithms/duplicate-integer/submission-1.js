class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const OGLength = nums.length;
        const newLength = new Set(nums).size;
        if(OGLength === newLength)
            // there is no difference means all items are unique
            return false;
        else
            return true;
    }
}
